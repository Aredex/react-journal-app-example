import { firebase, googleAuthProvider } from "../../firebase/firebase-config";
import types from "../../types/types";
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(console.log);
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const startRegisterWithEmailPassword = ({ email, password, name }) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(console.log);
    };
};

// TODO - Para Dispatcher

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});

export const logout = () => ({
    type: types.logout,
});
