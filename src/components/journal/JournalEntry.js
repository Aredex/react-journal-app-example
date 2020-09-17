import React from "react";

const JournalEntry = () => {
    return (
        <div className="journal__entry cursor">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "url(https://aws.traveler.es/prod/designs/v1/assets/1000x667/21250.jpg)",
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default JournalEntry;