import { createNote, saveNotes, getNotes, deleteNote, editNote, filterNotes, fetchNote } from '../note-manager';
jest.mock('../utils.js');
jest.mock('../note.js');
jest.mock('../modal.js');

describe('note-manager', () => {
  beforeEach(() => {
    localStorage.setItem('notes', JSON.stringify([]));
  });

  afterEach(() => {
    localStorage.setItem('notes', JSON.stringify([]));
  });

  test('createNote is defined', () => {
    expect(createNote).toBeDefined();
  });

  test('stores a note in local storage', () => {
    const title = 'test title';
    const body = 'test body';

    createNote({ title, body });

    expect(localStorage.getItem('notes')).toBeTruthy();
  });

  test('retrieves a note on id', () => {
    const notes = [{ id: 1, title: 'test', body: 'test body' }];
    localStorage.setItem('notes', JSON.stringify(notes));
    const note = fetchNote(getNotes()[0].id);
    expect(note).toBeTruthy();
    expect(note.id).toEqual(getNotes()[0].id);
  });

  test('fails to save an empty note', () => {
    createNote({});
    expect(getNotes().length).toEqual(0);
  });

  test('fetches all notes from storage', () => {
    let notes = [{ id: 1, title: 'test', body: 'test body' }];
    localStorage.setItem('notes', JSON.stringify(notes));
    notes = getNotes();
    expect(notes).toBeInstanceOf(Array);
    expect(notes.length).toEqual(1);
    expect(notes[0].title).toEqual('test');
  });

  test('lists all notes in storage', () => {
    let notes = [{ id: 1, title: 'test', body: 'test body' }];
    localStorage.setItem('notes', JSON.stringify(notes));
    const filterTerm = 'test';
    notes = filterNotes(filterTerm);
    expect(notes.length).toEqual(1);
  })

  test('edits a note in storage', () => {
    createNote({ title: 'test title', body: 'test body' });
    expect(getNotes().length).toEqual(1);
    editNote(getNotes()[0].id, { title: 'updated title', body: 'updated body' });
    expect(getNotes().length).toEqual(1);
    expect(getNotes()[0].body).toEqual('updated body');
  });

  test('deletes a note from storage', () => {
    createNote({ title: 'test title', body: 'test body' });
    expect(getNotes().length).toEqual(1);
    const notes = getNotes();
    deleteNote(notes[0].id);
    expect(getNotes().length).toEqual(0);
  })

})
