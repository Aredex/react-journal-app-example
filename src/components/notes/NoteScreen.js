import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeletingImg } from "../../reducers/actions/notes";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, resetForm] = useForm(note);
  const { body, title, id } = formValues;
  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  const handleDeleteImg = () => {
    dispatch(startDeletingImg(id));
  };

  useEffect(() => {
    if (note.id !== activeId.current) {
      resetForm(note);
      activeId.current = note.id;
    }
  }, [note, resetForm]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          autoComplete="off"
          className="notes__title-input"
          name="title"
          onChange={handleInputChange}
          placeholder="Some awesome title"
          type="text"
          value={title}
        />

        <textarea
          className="notes__textarea"
          name="body"
          onChange={handleInputChange}
          placeholder="What happened today"
          value={body}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDeleteImg}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
