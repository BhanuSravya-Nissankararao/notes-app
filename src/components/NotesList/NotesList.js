import React from 'react';
import Note from '../Note/Note';
import './NotesList.css'

const NotesList = ({ notes, onDelete }) => {
  return (
    <div class = "noteList">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;
// import React from 'react';
// import Note from '../Note/Note';
// import './NotesList.css'

// const NotesList = ({ notes, onDelete }) => {
//   const notesArray = Array.from({ length: notes }, (_, i) => i + 1); // Convert the number to an array

//   return (
//     <div className="noteList">
//       {notesArray.map(note => (
//         <Note key={note} note={note} onDelete={onDelete} />
//       ))}
//     </div>
//   );
// };

// export default NotesList;