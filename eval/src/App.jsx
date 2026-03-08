import { React } from "react";
import { useState, useEffect, useMemo } from "react";

import { NotesContext, NotesProvider } from "./context/NotesContext";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
function Dashboard() {
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

  const totalNotes = useMemo(() => notes.length, [notes]);
  return (

    <div style={{ padding: "20px" }}>
      <h1>notes Dashboard</h1>
      <AddNote />
      <h3>Total Notes:{totalNotes}</h3>
      <NotesList />
    </div>


  )

};
function App() {
  return (
    <NotesProvider>
      <Dashboard />
    </NotesProvider>
  )

}

export default App;
