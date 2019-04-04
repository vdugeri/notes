export let showNotes = notes => {
  return localStorage.getItem('notes');
}

export let listNotes = () => {
  return localStorage.getItem('notes');
}


/**
 * Hide the notes area from the DOM
 */
export const hideNoteArea = () => {
  return true;
}

export let showNote = (id) => {
  return (JSON.parse(localStorage.getItem('notes'))).filter(note => note.id === +id);
}
