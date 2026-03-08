import { React } from "react";
import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

function AddNote() {
    const { notes, setNotes } = useContext(NotesContext);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();

        }

    }, []);
    const addNote = () => {
        if (input.trim() === "") return;
        const newNote = {
            id: Date.Now(),
            text: input
        };
        setNotes([...notes, newNote]);
        setInput("");
    };

    return
    (
        <div>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Note" />
            <button onClick={addNote}>Add Note</button>
        </div>
    );
}
export default AddNote;