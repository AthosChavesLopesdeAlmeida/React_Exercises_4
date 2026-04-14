import './components.css'
const Table = () => {
   const dados = [
    { mes: 'Janeiro', vendas: 32, receita: 'R$ 48.000,00' },
    { mes: 'Fevereiro', vendas: 27, receita: 'R$ 40.500,00' },
    { mes: 'Março', vendas: 41, receita: 'R$ 61.500,00' },
  ]

  return (
    <div className="table">
      <table>
        
        <thead>
          <tr>
            <th>Mês</th>
            <th>Vendas</th>
            <th>Receita</th>
          </tr>
        </thead>
        
        <tbody>
          {dados.map(item => (
            <tr key={item.mes}>
              <td>{item.mes}</td>
              <td>{item.vendas}</td>
              <td>{item.receita}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  )
}

export default Table