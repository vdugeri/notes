import {
  showEditModal,
  showCreateModal,
  hideCreateModal,
  hideEditModal
} from "./modal";

import {
  showNote,
  listNotes,
  populateEditFields,
  showNotes,
} from "./note";

import {
  editNote,
  deleteNote,
  createNote,
  filterNotes
} from "./note-manager";

document.addEventListener('keyup', event => {
  if (event.target.matches('#search')) {
    const filterTerm = event.target.value;
    const notes = filterNotes(filterTerm);
    showNotes(notes);
  }
});

document.addEventListener('click', event => {
  if (event.target.matches('#createNote')) {
    showCreateModal();
  }

  if (event.target.matches('#closeModal')) {
    hideCreateModal();
  }

  if (event.target.matches('#saveNote')) {
    const titleField = document.getElementById('title');
    const bodyField = document.getElementById('body');

    const title = titleField.value;
    const body = bodyField.value;
    createNote({ title, body })

    bodyField.value = '';
    titleField.value = '';
  }

  if (event.target.matches('.note-title')) {
    showNote(event.target.getAttribute('note-id'));
  }

  if (event.target.matches('#edit') || event.target.matches('.edit')) {
    showEditModal();
    const noteId = document.getElementById('note-body').getAttribute('note-id');
    populateEditFields(noteId);
  }

  if (event.target.matches('#closeEditModal')) {
    hideEditModal();
  }


  if (event.target.matches('#editNote')) {
    const noteId = document.getElementById('editModal').getAttribute('note-id');
    const title = document.getElementById('edit-title').value;
    const body = document.getElementById('edit-body').value;
    editNote(noteId, { title, body });
  }

  if (event.target.matches('#delete') || event.target.matches('.delete')) {
    const noteId = document.getElementById('note-body').getAttribute('note-id');
    deleteNote(noteId);
  }

}, false);

window.onload = () => {
  listNotes();
};
