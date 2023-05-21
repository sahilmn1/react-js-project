import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');



  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  // const handleAddNote = () => {
  //   if (newNote.trim() !== '') {
  //     setNotes([...notes, newNote]);
  //     setNewNote('');
  //   }
  // };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([newNote, ...notes]); // Prepend newNote to the notes array
      setNewNote('');
    }
  };
  

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1 className="title">Notes App</h1>

      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a new note"
        />
        <button className="add-button" onClick={handleAddNote}>
          Add Note
        </button>

       
      </div>

      <hr />
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li className="note-item" key={index}>
            <span className="note-text">{note}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
