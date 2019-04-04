import { showNote, hideNoteArea, listNotes, populateEditFields } from '../note';
import { fetchNote, getNotes } from '../note-manager';

describe('note', () => {
  beforeEach(() => {
    localStorage.setItem('notes', JSON.stringify([]));
  });

  afterEach(() => {
    localStorage.setItem('notes', JSON.stringify([]));
  });

  test('displays a note on the board', () => {
    localStorage.setItem(
      'notes',
      JSON.stringify([{ id: 1, title: 'test', body: 'test body' }])
    );

    document.body.innerHTML = `<div>
      <div class="note">
        <p id="note-body"></p>
      </div>
    </div>`;

    showNote(1);

    expect(document.getElementById('note-body').innerText).toEqual('test body');
  });

  test('makes the note board invisible to hide a note', () => {
    document.body.innerHTML = `<div>
      <div class="note">
        <p id="note-body"></p>
      </div>
    </div>`;

    hideNoteArea();
    expect(document.querySelector('.note').style.display).toEqual('none');
  });

  test('list notes to sidebar', () => {
    localStorage.setItem(
      'notes',
      JSON.stringify([{ id: 1, title: 'test', body: 'test body' }])
    );
    document.body.innerHTML = `<div>
      <ul id="notes"></ul>
    </div>`;

    listNotes();
    expect(document.getElementById('notes').children.length).toBeGreaterThanOrEqual(1);
  });

  test('populate edit form', () => {
    localStorage.setItem(
      'notes',
      JSON.stringify([{ id: 1, title: 'test', body: 'test body' }])
    );

    document.body.innerHTML = `<div>
      <div id="editModal">
        <input type="text" id="edit-title" />
        <input type="text" id="edit-body" />
      </div>
    </div>`;

    populateEditFields(getNotes()[0].id);

    expect(parseInt(
      document.getElementById('editModal').getAttribute('note-id')
    )).toEqual(getNotes()[0].id);
  })
});
