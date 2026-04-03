import './themes.css'
import Modal from './Modal'
import Controls from './Controls'
import { useThemeStore } from './themeStore'

const FullLayout = () => {
  const theme = useThemeStore((state) => state.theme)

  return (
    <div className={theme}>
      <Modal/>
      <Controls/>
    </div>
  )
}

export default FullLayout