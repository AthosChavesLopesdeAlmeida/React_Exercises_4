const SkeletonCalendar = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton" style={{ height: '24px', width: '40%' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: '32px' }} />
        ))}
      </div>
    </div>
  )
}

export default SkeletonCalendar