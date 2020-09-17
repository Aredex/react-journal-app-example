import React from "react";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon mr-5 ml-1"></i>
                    <span>Alexander</span>
                </h3>

                <button className="btn mt-1">Logout</button>
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
