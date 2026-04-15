import './components/components.css'
const Map = React.lazy(() => import('./components/Map'))
const Table = React.lazy(() => import('./components/Table'))
const Editor = React.lazy(() => import('./components/Editor'))
const Graphics = React.lazy(() => import('./components/Graphics'))
const Calendar = React.lazy(() => import('./components/Calendar'))
import SkeletonGraphics from './skeletons/SkeletonGraphics'
import SkeletonCalendar from './skeletons/SkeletonCalendar'
import SkeletonEditor from './skeletons/SkeletonEditor'
import SkeletonTable from './skeletons/SkeletonTable'
import SkeletonMap from './skeletons/SkeletonMap'
import { useState, Suspense } from 'react'

import React from 'react'

const Final_5 = () => {
  const [activePage, setActivePage] = useState('table')
  return (
    <main>
      {activePage === 'table' && (
        <Suspense fallback={<SkeletonTable/>}>
          <Table/>          
        </Suspense>
      )}
      {activePage === 'map' && (
        <Suspense fallback={<SkeletonMap/>}>
          <Map/>          
        </Suspense>
      )}
      {activePage === 'editor' && (
        <Suspense fallback={<SkeletonEditor/>}>
          <Editor/>          
        </Suspense>
      )}
      {activePage === 'graphics' && (
        <Suspense fallback={<SkeletonGraphics/>}>
          <Graphics/>          
        </Suspense>
      )}
      {activePage === 'calendar' && (
        <Suspense fallback={<SkeletonCalendar/>}>
          <Calendar/>          
        </Suspense>
      )}
      <footer>
        <button onClick={() => setActivePage('map')}>Map</button>
        <button onClick={() => setActivePage('table')}>Table</button>
        <button onClick={() => setActivePage('editor')}>Editor</button>
        <button onClick={() => setActivePage('graphics')}>Graphics</button>
        <button onClick={() => setActivePage('calendar')}>Calendar</button>
      </footer>
    </main>
  )
}

export default Final_5