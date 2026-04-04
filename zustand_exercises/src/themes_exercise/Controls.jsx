import { useUIStore } from './themeStore'  
import { useThemeStore } from './themeStore'  

const Controls = () => {
  const toggleModal = useUIStore((state) => state.toggleModal)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <div>
      <button onClick={toggleModal}>Toggle modal</button>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Controls