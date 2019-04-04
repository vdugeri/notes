import { showSuccess, showError, getNextId, clearChildren } from '../utils';


describe('utils', () => {
  test('showSuccess displays a success message', () => {
    document.body.innerHTML = `<div id="toast">
      <div></div>
    </div>`;
    showSuccess('success');
    expect(document.getElementById('toast').children[0].innerText).toEqual('success');
  });

  test('showError displays an error message', () => {
    document.body.innerHTML = `<div id="toast">
      <div></div>
    </div>`;
    showError('error');
    expect(document.getElementById('toast').children[0].innerText).toEqual('error');
  });

  test('getNextId gets next id in sequence', () => {
    const id = getNextId();
    expect(id).toEqual(1);
  });

  test('clearChildren clears all child elements for node', () => {
    document.body.innerHTML = `<div>
      <ul id="parent">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>`;
    const node = document.getElementById('parent');
    clearChildren(node);
    expect(node.children.length).toBe(0);
  })
});
