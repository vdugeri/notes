import { clearChildren } from "./utils";
import { getNotes, fetchNote } from "./note-manager";



/**
 * Show the contents of a note on the board
 *
 * @param {integer} id
 */
export let showNote = (id) => {
  const note = fetchNote(id)

  showNoteArea(note)
}

/**
 * render the show notes area to the DOM
 *
 * @param {Object} note
 */
const showNoteArea = (note) => {
  document.querySelector('.note').style.display = 'block';

  const noteBody = document.getElementById('note-body')

  noteBody.setAttribute('note-id', note.id);
  noteBody.innerText = note.body;
}

/**
 * Hide the notes area from the DOM
 */
export const hideNoteArea = () => {
  document.querySelector('.note').style.display = 'none';
}

/**
 * List notes on the sidebar
 */
export let listNotes = () => {
  const notes = getNotes();
  showNotes(notes);
}

export let showNotes = notes => {
  const notesContainer = document.getElementById('notes');
  clearChildren(notesContainer);

  notes.forEach(note => {
    let item = document.createElement('li');
    item.setAttribute('class', 'note-title');
    item.setAttribute('note-id', note.id)
    item.innerText = note.title;
    notesContainer.appendChild(item);
  });
}

export const populateEditFields = noteId => {
  const note = fetchNote(noteId);
  document.getElementById('edit-title').value = note.title;
  document.getElementById('edit-body').value = note.body;
  document.getElementById('editModal').setAttribute('note-id', note.id);
}
