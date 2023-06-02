import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note.",
    date: "1402/3/11",
    },
    {
      id: nanoid(),
      text: "This is my second note.",
      date: "1402/3/12",
    },
    {
      id: nanoid(),
      text: "This is my third note.",
      date: "1402/3/13",
    },
    {
      id: nanoid(),
      text: "This is my forth note.",
      date: "1402/3/14",
    },
    {
      id: nanoid(),
      text: "This is my last note.",
      date: "1402/3/11",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }
    return <div className="container">
              <NotesList 
                  notes={notes} 
                  handleAddNote={addNote}
                  handleDeleteNote={deleteNote}
              />
            </div>
};

export default App;