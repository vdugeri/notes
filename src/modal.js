let createModal = document.getElementById('modal');
let editModal = document.getElementById('editModal');

export let showCreateModal = () => {
  createModal.style.display = 'block';
}

export let hideCreateModal = () => {
  createModal.style.display = 'none';
}

export let showEditModal = (e) => {
  const editTitleField = document.getElementById('edit-title');
  const editBodyField = document.getElementById('edit-body');

  editModal.style.display = 'block';
}

export let hideEditModal = () => {
  editModal.style.display = 'none';
}
