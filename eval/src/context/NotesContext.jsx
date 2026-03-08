import React, { createContext, useState } from "react";
export const NotesContext = createContext();
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    return (
        <NotesContext.Provider value={{ notes, setNotes, selectedNote, setSelectedNote }}>
            {children}
        </ NotesContext.Provider>
    )

};