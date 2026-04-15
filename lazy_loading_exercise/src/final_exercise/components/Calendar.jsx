import './components.css'
const Calendar = () => {
  const dias = Array.from({ length: 30 }, (_, i) => i + 1)
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  return (
    <div className="calendar">
      <h2>Abril 2026</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', width: '400px', marginTop: '10px' }}>
        {diasSemana.map(dia => (
          <div key={dia} style={{ fontWeight: 'bold', textAlign: 'center' }}>{dia}</div>
        ))}
        {/* Abril começa na quarta, então 3 células vazias no início */}
        {Array.from({ length: 3 }).map((_, i) => <div key={`empty-${i}`} />)}
        {dias.map(dia => (
          <div key={dia} style={{ textAlign: 'center', padding: '4px', border: '1px solid #ccc', width: '40px', height: '40px'}}>
            {dia}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar