import { getNextId, showSuccess, showError } from "./utils";
import { hideEditModal } from "./modal";
import { listNotes, showNote, hideNoteArea, showNotes } from "./note";

/**
 * Create a new note and save to storage
 */
export let createNote = ({ title, body }) => {
  if ((title && title.trim()) && (body && body.trim())) {
    const notes = getNotes();
    const id = getNextId();
    notes.push({ title, body, id })
    saveNotes(notes);

    showSuccess('Note saved successfully')
    listNotes();
  } else {
    showError('please supply values for title and body')
  }
}


/**
 * save a list of notes to storage
 *
 * @param {Array} notes
 */
let saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export let fetchNote = id => {
  let notes = getNotes();

  notes = notes.filter(note => {
    return +note.id === +id;
  });

  return notes.length ? notes[0] : null;
}


/**
 * delete a note from storage
 */
export let deleteNote = noteId => {
  const notes = getNotes().filter(note => note.id !== +noteId);

  localStorage.setItem('notes', JSON.stringify(notes));

  showSuccess('Note deleted succesfully');
  hideNoteArea();
  listNotes();
}

/**
 * Edits a note matching the noteId
 *
 * @param {integer} noteId
 */
export let editNote = (noteId, { title, body }) => {
  const note = fetchNote(noteId);

  note.title = title;
  note.body = body;

  let notes = getNotes();
  const index = notes.findIndex(note => note.id === +noteId);
  notes.splice(index, 1, note);

  saveNotes(notes);

  hideEditModal();
  showSuccess('Note successfully updated');
  listNotes();
  showNote(noteId);
}

/**
 * Get all notes from storage
 */
export let getNotes = () => {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

/**
 * Filter notes by title and content
 *
 * @param {Event} event
 */
export const filterNotes = (filterTerm) => {
  let notes = getNotes();

  notes = notes.filter(note => {
    return note.title.toLowerCase().includes(filterTerm.toLowerCase())
      || note
        .body
        .toLowerCase()
        .includes(filterTerm.toLowerCase())
  });

  return notes;
}
