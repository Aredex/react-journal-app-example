import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../reducers/actions/auth";
import PublicRoues from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Crea un observable que revisa si hay usuario logueado
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch]);

    if (checking) {
        return <h1>Espere...</h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoues
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn ? isLoggedIn : false}
                        path="/auth"
                        redirectTo={"/"}
                    ></PublicRoues>
                    <PrivateRoutes
                        component={JournalScreen}
                        exact
                        isAuthenticated={isLoggedIn ? isLoggedIn : false}
                        path="/"
                        redirectTo={"/auth/login"}
                    ></PrivateRoutes>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
