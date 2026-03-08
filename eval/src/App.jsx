import { React } from "react";
import { useState, useEffect, useMemo } from "react";

import { NotesContext } from "./context/NotesContext";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"))
  }
  )

}