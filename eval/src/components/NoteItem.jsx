import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
function NoteItem({ note }) {
    const { selectedNote, setSelectedNote } = useContext(NotesContext);
    const selected = selectedNote === note.id;
    return
    (
        <div onClick={() => setSelectedNote(note.id)} styke={{
            padding: "10px",
            border: "1px solid black",
            margin: "5px",
            backgroundColor: selected ? "yellow" : "white"
        }} >
            {note.text}

        </ div>

    )
}

export default NoteItem;