import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../reducers/actions/notes";

const JournalEntry = ({ url, id, body, date, title }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleSelectNote = () => {
    dispatch(activeNote(id, { body, title, date, url }));
  };

  return (
    <div className="journal__entry cursor" onClick={handleSelectNote}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("D")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
