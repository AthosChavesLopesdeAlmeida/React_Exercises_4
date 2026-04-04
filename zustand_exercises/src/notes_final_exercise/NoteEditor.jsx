import { useNotesStore } from "./notesStore"

const NoteEditor = () => {
  const activeNote = useNotesStore((state) => 
    state.notes.find((note) => note.id === state.activeNote)
  )
  const editNote = useNotesStore((state) => state.editNote)
  const removeNote = useNotesStore((state) => state.removeNote)
  const setActiveNote = useNotesStore((state) => state.setActiveNote)

  if (!activeNote) {
    return <p>Select a note, please</p>
  }

  return (
    <div>
      <h2>Note editor</h2>
      <input type="text" value={activeNote.title} 
      onChange={(e) => editNote(activeNote.id, {title: e.target.value})}/>

      <textarea value={activeNote.content}
      onChange={(e) => editNote(activeNote.id, {content: e.target.value})}/>

      <button onClick={() => removeNote(activeNote.id)}>Remove note</button>
      <button onClick={() => setActiveNote(null)}>Close editor</button>
    </div>
  )
}

export default NoteEditor