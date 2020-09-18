import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
    localStorage.setItem("lastPath", rest.location.pathname);

    return (
        <Route
            {...rest}
            component={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/auth/login"/>
                )
            }
        />
    );
};

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};

export default PrivateRoutes;
