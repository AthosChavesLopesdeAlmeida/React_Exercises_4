const SkeletonEditor = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton" style={{ height: '24px', width: '40%' }} />
      <div className="skeleton" style={{ height: '36px', width: '100%' }} />
      <div className="skeleton" style={{ height: '36px', width: '100%' }} />
      <div className="skeleton" style={{ height: '36px', width: '30%' }} />
    </div>
  )
}

export default SkeletonEditor