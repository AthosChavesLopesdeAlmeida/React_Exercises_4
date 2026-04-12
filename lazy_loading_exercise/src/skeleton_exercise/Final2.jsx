import React from 'react'
import Home from './Home'
import { useState } from "react"
import { Suspense } from 'react'
import Skeleton from './Skeleton'
const About = React.lazy(
  () => new Promise(resolve => 
    setTimeout(() => resolve(import('./About')), 2000)
  ))

const Final = () => {
  const [isHome, setIsHome] = useState(true)

  return (
    <main>
      <Suspense fallback={<Skeleton/>}>
        <section>
          {isHome ? <Home/> : <About/>}
        </section>
      </Suspense>

      
      <section>
        <button onClick={() => setIsHome(!isHome)}>Switch</button>
      </section>
    </main>
  )
}

export default Final