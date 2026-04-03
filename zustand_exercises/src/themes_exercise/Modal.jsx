import { useUIStore } from "./themeStore"

const Modal = () => {
  const modalOpen = useUIStore((state) => state.modalOpen)
  const toggleModal = useUIStore((state) => state.toggleModal)

  return (
    <div className={modalOpen ? 'open' : 'closed'}>
      <h1>This modal is open</h1>
      <button onClick={() => toggleModal}>Close</button>
    </div>
  )
}

export default Modal