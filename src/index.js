import { showModal, hideModal } from "./modal";
import { createNote, showNote, deleteNote, listNotes, filterNotes } from "./note";

const newNoteButton = document.getElementById('createNote');
const saveNoteButton = document.getElementById('saveNote');
const closeModalButton = document.getElementById('closeModal');
const deleteNoteButton = document.getElementById('delete');
const searchField = document.getElementById('search');

newNoteButton.addEventListener('click', showModal);
saveNoteButton.addEventListener('click', createNote);
closeModalButton.addEventListener('click', hideModal);
deleteNoteButton.addEventListener('click', deleteNote);
searchField.addEventListener('keyup', filterNotes);

document.addEventListener('click', event => {
  if (event.target.matches('.note-title')) {
    showNote(event.target.getAttribute('note-id'));
  }
}, false);

window.onload = () => {
  listNotes();
};
