import './skeleton.css'

const Skeleton = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton skeleton-title' />
      <div className='skeleton skeleton-line' />
      <div className='skeleton skeleton-line' />
      <div className='skeleton skeleton-line short' />
    </div>
  )
}

export default Skeleton