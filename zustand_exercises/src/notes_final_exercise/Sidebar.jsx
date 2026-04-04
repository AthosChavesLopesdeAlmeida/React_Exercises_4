import { useUIStore } from "./notesStore"
import { useNotesStore } from "./notesStore"
import { useSearchStore } from "./notesStore"

const Sidebar = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar)
  const notes = useNotesStore((state) => state.notes)
  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)
  const setActiveNote = useNotesStore((state) => state.setActiveNote)
  const addNote = useNotesStore((state) => state.addNote)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  )


  return (
    <nav>
      <h1>NOTES: </h1>
      <section>
        <h4>Search a note</h4>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={addNote}>Add note</button>
      </section>
      <section>
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id} onClick={() => setActiveNote(note.id)}>
              <div>
                <h6>{note.title}</h6>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => toggleSidebar()}>Close sidebar</button>
      </section>
    </nav>
  )
}

export default Sidebar