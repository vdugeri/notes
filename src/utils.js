/**
 * show the success toast
 *
 * @param {string} message
 */
export let showSuccess = message => {
  let toast = document.getElementById('toast');
  let messageBox = toast.children[0];

  messageBox.innerText = message;
  toast.setAttribute('class', 'toast toast--success');
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 5000);
}

export let showError = message => {
  let toast = document.getElementById('toast');
  let messageBox = toast.children[0];

  messageBox.innerText = message;
  toast.setAttribute('class', 'toast toast--error');
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 5000);
}

/**
 * Retrieves the id for the next item on the list
 */
export let getNextId = () => {
  const currId = JSON.parse(localStorage.getItem('id_seq')) || 0;
  const nextId = parseInt(currId) + 1;

  localStorage.setItem('id_seq', nextId);

  return nextId;
}

export let clearChildren = node => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
