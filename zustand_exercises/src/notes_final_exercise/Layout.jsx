import './notes.css'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import NoteEditor from './NoteEditor'
import { useUIStore } from './notesStore'

const Layout = () => {
  const theme = useUIStore((state) => state.theme)
  const sidebarOpen = useUIStore((state) => state.sidebarOpen)

  return (
    <main className={theme}>
      <Toolbar/>
      <NoteEditor/>
      {sidebarOpen && <Sidebar/>}
    </main>
  )
}

export default Layout