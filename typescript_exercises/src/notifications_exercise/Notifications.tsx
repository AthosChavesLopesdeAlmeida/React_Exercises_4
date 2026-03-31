import { useState } from "react"

type NotiType = 'info' | 'alert' | 'error'
type NotificationHandler = (notification: Notification) => void

interface Notification {
  id: number
  message: string
  read: boolean
  type: NotiType
}

function createNotification (message: string, type: NotiType): Notification {
  return {
    id: Date.now(),
    message: message,
    read: false,
    type: type
  }
}

function processNotifications (arr: Notification[], func: NotificationHandler) {
  arr.forEach(noti => {
    if (!noti.read) func(noti)
  })
}

export default function NotificationUI () {
  const [notis, setNotis] = useState<Notification[]>([])
  const [typeInput, setTypeInput] = useState<NotiType>('info')
  const [msgInput, setMsgInput] = useState<string>('')

  function markAsRead(id: number) {
    setNotis(prev => prev.map(noti =>
      noti.id === id ? { ...noti, read: true } : noti
    ))
  }

  function handleProcess() {
    processNotifications(notis, (noti) => {
      console.log('Unread:', noti.message)
    })
  }

  return (
    <main>
      <section>
        <form onSubmit={(e) => {
          e.preventDefault()
          const newNoti = createNotification(msgInput, typeInput)
          setNotis(prev => [...prev, newNoti])
        }}>
          <input type="text" onChange={(e) => setMsgInput(e.target.value)}/>
          <select name="notis" id="notis" onChange={(e) => setTypeInput(e.target.value as NotiType)}>
            <option value="info">info</option>
            <option value="alert">alert</option>
            <option value="error">error</option>
          </select>
          <button type="submit">Adicionar</button>
        </form>
      </section>

      <section>
        <button onClick={handleProcess}>See unread message</button>
        <ul>
          {notis.map(noti => (
            <li key={noti.id}>
              <h4>{noti.message}</h4>
              <p>{noti.type}</p>
              <p>{noti.read ? 'read' : 'unread'}</p>
              <button onClick={() => markAsRead(noti.id)}>
                Mark as read
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}