import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import types from "../../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);

    dispatch(refreshNote(note.id, noteToFireStore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const startUpLoading = (file) => {
  return async (dispatch, getState) => {
    Swal.fire({
      title: "uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const { active: activeNote } = getState().notes;
    const fileUrl = await fileUpload(file);

    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));

    Swal.close();
  };
};

export const startDeletingImg = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

// TODO - Para Dispatcher

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: [...notes],
});

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesLogoutCleaning,
});
