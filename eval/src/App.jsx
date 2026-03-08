import { React } from "react";
import { useState, useEffect, useMemo } from "react";

import { NotesContext } from "./context/NotesContext";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);

  }, []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]
  );
  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);
  return (
    <NotesContext.Provider value={{ notes, setNotes, selectedNote, setSelectedNote }}>
      <div>
        <h1>notes Dashboard</h1>
        <AddNote />
        <h3>Total Notes:{totalNotes}</h3>
        <NotesList />
      </div>

    </NotesContext.Provider>
  )

};

export default App;
