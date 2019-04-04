/**
 * show the success toast
 *
 * @param {string} message
 */
export let showSuccess = message => {
  return true;
}

export let showError = message => {
  return false;
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
  return true;
};
