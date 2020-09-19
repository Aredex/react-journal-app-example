const types = {
  // Solo para la Auth
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  // TODO Para ui
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",

  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",

  // Todo para las notas
  notesAddNew: "[Notes] New note",
  notesActive: "[Notes] Set active note",
  notesLoad: "[Notes] Load notes",
  notesUpdated: "[Notes] Updated note",
  notesFileUrl: "[Notes] Updated image url",
  notesDelete: "[Notes] Delete note",
  notesLogoutCleaning: "[Notes] Logout Cleaning",
};

export default types;
