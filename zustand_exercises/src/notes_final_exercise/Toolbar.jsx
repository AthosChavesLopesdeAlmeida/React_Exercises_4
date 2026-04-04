import { useUIStore } from "./notesStore"


const Toolbar = () => {
  const toggleTheme = useUIStore((state) => state.toggleTheme)
  const toggleSidebar = useUIStore((state) => state.toggleSidebar)

  return (
    <section>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={toggleSidebar}>Toggle sidebar</button>
    </section>
  )
}

export default Toolbar