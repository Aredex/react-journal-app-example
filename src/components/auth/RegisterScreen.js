import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmailPassword } from "../../reducers/actions/auth";
import { removeError, setError } from "../../reducers/actions/ui";

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const [
        { name, email, password, confirmPassword },
        handleInputChange,
    ] = useForm({
        email: "pacuestarivas@gmail.com",
        name: "Pedro Alexander",
        password: "123456",
        confirmPassword: "123456",
    });

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPassword({ email, password, name }));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        }

        if (password.length <= 5) {
            dispatch(
                setError("The password should be at least 6 characters long")
            );
            return false;
        }

        if (password !== confirmPassword) {
            dispatch(setError("Passwords do not match"));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}

                <input
                    autoComplete="off"
                    name="name"
                    className="auth__input"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    name="password"
                    className="auth__input"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    name="confirmPassword"
                    className="auth__input"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleInputChange}
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
