// RENDERING A COLLECTION, MODULES

// import { useState } from 'react'

/*
const Notes = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}
*/

// import Note from "./components/Note"

// const App = ({ notes }) => {
//   return (
//     <>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note =>
//           // <li key={note.id}>
//           //   {note.content}
//           // </li>
//           <Note key={note.id} note={note} />
//         )
//         }
//       </ul>
//     </>
//   )
// }

import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App
