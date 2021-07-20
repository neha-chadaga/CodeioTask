import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Area from "./area";
import Axios from 'axios'

function App(){

    const [notes, setNotes] = useState([]);
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) =>{
        setNotesList(response.data);
      });
    }, []);

    function addNote(newNote){
      Axios.post("http://localhost:3001/api/insert", 
      {
        title:newNote.title, 
        content:newNote.content
      });
        setNotesList([
          ...notesList, 
          { title:newNote.title, content:newNote.content}
        ]);

      setNotes(prevNotes => {
          return [...prevNotes, newNote];
      });
    }
    function deleteNote(id){
         setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index!=id;
          });
        });
    }
    return(
        <div>
        <Header />
        <Area onAdd={addNote} />
        {notesList.map((noteItems, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItems.title}
              content={noteItems.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
}
export default App;
