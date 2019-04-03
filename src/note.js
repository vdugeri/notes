import { showSuccess, getNextId, clearChildren } from "./utils";

export let createNote = (e) => {
  const titleField = document.getElementById('title');
  const bodyField = document.getElementById('body');

  const title = titleField.value;
  const body = bodyField.value;

  const notes = getNotes();
  const id = getNextId();
  notes.push({ title, body, id })
  saveNotes(notes);

  showSuccess('Not saved successfully')

  bodyField.value = '';
  titleField.value = ''; //TODO: Move this

  listNotes();
}

let saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export let showNote = (id) => {
  let notes = getNotes();

  notes = notes.filter(note => {
    return +note.id === +id;
  });

  showNoteArea(notes[0])
}

const showNoteArea = (note) => {
  document.querySelector('.note').style.display = 'block';
  const noteBody = document.getElementById('note-body')
  noteBody.setAttribute('note-id', note.id);
  noteBody.innerText = note.body;
}

const hideNoteArea = () => {
  document.querySelector('.note').style.display = 'none';
}

export let deleteNote = (event) => {
  const noteId = document.getElementById('note-body').getAttribute('note-id');
  const notes = getNotes().filter(note => note.id !== +noteId);

  localStorage.setItem('notes', JSON.stringify(notes));

  showSuccess('Note deleted succesfully');
  hideNoteArea();
  listNotes();
}

export let getNotes = () => {
  return JSON.parse(localStorage.getItem('notes')) || [];
}

export let listNotes = () => {
  const notesContainer = document.getElementById('notes');
  const notes = JSON.parse(localStorage.getItem('notes'));

  clearChildren(notesContainer);

  notes.forEach(note => {
    let item = document.createElement('li');
    item.setAttribute('class', 'note-title');
    item.setAttribute('note-id', note.id)
    item.innerText = note.title;
    notesContainer.appendChild(item);
  });
}
