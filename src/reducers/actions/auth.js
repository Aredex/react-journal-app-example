import types from "../../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        
    }
}

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
