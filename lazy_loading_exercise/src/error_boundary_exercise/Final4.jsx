import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import Skeleton from './Skeleton'
import ErrorBoundary from './ErrorBoundary'

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


const Final4 = () => {
  const [activePage, setActivePage] = useState('profile')

  return (
    <main>
      {activePage === 'profile' && (
        <ErrorBoundary>
          <Suspense fallback={<Skeleton />}>
            <Profile />
          </Suspense>
        </ErrorBoundary>
      )}

      {activePage === 'rel' && (
        <ErrorBoundary>
          <Suspense fallback={<Skeleton />}>
            <Rel />
          </Suspense>
        </ErrorBoundary>
      )}

      {activePage === 'config' && (
        <ErrorBoundary>
          <Suspense fallback={<Skeleton />}>
            <Config />
          </Suspense>
        </ErrorBoundary>
      )}
      
      <section>
        <button onClick={() => setActivePage('profile')}>Profile</button>
        <button onClick={() => setActivePage('rel')}>Rel</button>
        <button onClick={() => setActivePage('config')}>config</button>
      </section>
    </main>
  )
}

export default Final4
  