import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import Skeleton from './Skeleton'

const Profile = React.lazy(
  () => new Promise(resolve => 
    setTimeout(() => resolve(import('./Profile')), 2000)
))
const Rel = React.lazy(
  () => new Promise(resolve => 
    setTimeout(() => resolve(import('./Rel')), 2000)
))
const Config = React.lazy(
  () => new Promise(resolve => 
    setTimeout(() => resolve(import('./Config')), 2000)
))


const Final3 = () => {
  const [activePage, setActivePage] = useState('profile')

  return (
    <main>
      <Suspense fallback={<Skeleton/>}>
        <section>
          {activePage === 'profile' && <Profile/>}
          {activePage === 'rel' && <Rel/>}
          {activePage === 'config' && <Config/>}
        </section>
      </Suspense>
      
      <section>
        <button onClick={() => setActivePage('profile')}>Profile</button>
        <button onClick={() => setActivePage('rel')}>Rel</button>
        <button onClick={() => setActivePage('config')}>config</button>
      </section>
    </main>
  )
}

export default Final3
  