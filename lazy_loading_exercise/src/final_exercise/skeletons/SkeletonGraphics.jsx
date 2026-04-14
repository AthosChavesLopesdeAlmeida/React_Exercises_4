const SkeletonGraphics = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton" style={{ height: '24px', width: '40%' }} />
      <div className="skeleton" style={{ height: '180px', width: '100%' }} />
      <div className="skeleton" style={{ height: '16px', width: '100%' }} />
      <div className="skeleton" style={{ height: '16px', width: '60%' }} />
    </div>
  )
}

export default SkeletonGraphics