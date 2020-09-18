import React from "react";
import { useDispatch } from "react-redux";
import { startLogOut } from "../../reducers/actions/auth";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(startLogOut());
    };

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon mr-5 ml-1"></i>
                    <span>Alexander</span>
                </h3>

                <button className="btn mt-1" onClick={handleLogOut}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    );
};

export default Sidebar;
