import { showSuccess, getNextId, clearChildren, showError } from "./utils";


/**
 * Create a new note and save to storage
 */
export let createNote = () => {
  const titleField = document.getElementById('title');
  const bodyField = document.getElementById('body');

  const title = titleField.value;
  const body = bodyField.value;

  if (title.trim() && body.trim()) {
    const notes = getNotes();
    const id = getNextId();
    notes.push({ title, body, id })
    saveNotes(notes);

    showSuccess('Not saved successfully')

    bodyField.value = '';
    titleField.value = ''; //TODO: Move this

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

/**
 * Show the contents of a note on the board
 *
 * @param {integer} id
 */
export let showNote = (id) => {
  let notes = getNotes();

  notes = notes.filter(note => {
    return +note.id === +id;
  });

  showNoteArea(notes[0])
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
const hideNoteArea = () => {
  document.querySelector('.note').style.display = 'none';
}

/**
 * delete a note from storage
 */
export let deleteNote = () => {
  const noteId = document.getElementById('note-body').getAttribute('note-id');
  const notes = getNotes().filter(note => note.id !== +noteId);

  localStorage.setItem('notes', JSON.stringify(notes));

  showSuccess('Note deleted succesfully');
  hideNoteArea();
  listNotes();
}

/**
 * Get all notes from storage
 */
export let getNotes = () => {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

/**
 * List notes on the sidebar
 */
export let listNotes = () => {
  const notes = getNotes();
  showNotes(notes);
}

let showNotes = notes => {
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

export let filterNotes = (event) => {
  const filterTerm = event.target.value;
  let notes = getNotes();

  notes = notes.filter(note => {
    return note.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
      note
        .body
        .toLowerCase()
        .includes(filterTerm.toLowerCase())
  });

  showNotes(notes);
}
