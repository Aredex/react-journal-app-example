import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form action="">
                <input
                    autoComplete="off"
                    name="name"
                    className="auth__input"
                    placeholder="Name"
                    type="text"
                    // value="email"
                />
                <input
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    placeholder="Email"
                    type="email"
                    // value="email"
                />
                <input
                    name="password"
                    className="auth__input"
                    placeholder="Password"
                    type="password"
                    // value="password"
                />

                <input
                    name="confirmPassword"
                    className="auth__input"
                    placeholder="Confirm Password"
                    type="password"
                    // value="password"
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link className="link mt-5" to="/auth/login">
                    Already Registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;
