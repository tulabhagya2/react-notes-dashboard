import React, { useContext } from "react"
import NoteItem from "./NoteItem";
import { NotesContext } from "../context/NotesContext";

function NotesList() {
    const { notes } = useContext(NotesContext);
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    )
}
export default NotesList;