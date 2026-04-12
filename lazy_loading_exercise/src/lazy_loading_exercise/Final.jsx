import React from 'react'
import Home from './Home'
import { useState } from "react"
import { Suspense } from 'react'
const About = React.lazy(() => import('./About'))

const Final = () => {
  const [isHome, setIsHome] = useState(true)

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
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