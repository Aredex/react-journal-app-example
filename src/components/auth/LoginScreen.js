import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login } from "../../reducers/actions/auth";

const LoginScreen = () => {
    const dispatch = useDispatch();

    const [{ email, password }, handleInputChange] = useForm({
        email: "pacuestar@gmail.com",
        password: "123456",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(12345, "Alex"));
    };

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    autoComplete="off"
                    className="auth__input"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="email@email.com"
                    type="email"
                    value={email}
                />
                <input
                    className="auth__input"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                    type="password"
                    value={password}
                />

                <button className="btn btn-primary btn-block" type="submit">
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;
