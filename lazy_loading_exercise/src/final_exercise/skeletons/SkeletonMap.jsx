const SkeletonMap = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton" style={{ height: '24px', width: '40%' }} />
      <div className="skeleton" style={{ height: '200px', width: '100%' }} />
    </div>
  )
}

export default SkeletonMap