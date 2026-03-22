import Link from 'next/link'
import produtos from '../ex02_data/produtos'

const page = () => {
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <Link href={`/ex02_produtos/${produto.id}`}>
              {produto.nome} - R$ {produto.preco}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default page