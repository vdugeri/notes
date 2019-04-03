import { showModal, hideModal } from "./modal";
import { createNote, showNote, deleteNote, listNotes } from "./note";

const newNoteButton = document.getElementById('createNote');
const saveNoteButton = document.getElementById('saveNote');
const closeModalButton = document.getElementById('closeModal');
const deleteNoteButton = document.getElementById('delete');

newNoteButton.addEventListener('click', showModal);
saveNoteButton.addEventListener('click', createNote);
closeModalButton.addEventListener('click', hideModal);
deleteNoteButton.addEventListener('click', deleteNote);

document.addEventListener('click', event => {
  if (event.target.matches('.note-title')) {
    showNote(event.target.getAttribute('note-id'));
  }
}, false);

window.onload = () => {
  listNotes();
};
