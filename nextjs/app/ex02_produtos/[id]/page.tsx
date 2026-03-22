import produtos from '../../ex02_data/produtos'

export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const produto = produtos.find(p => p.id === id)

  if (!produto) return <p>Produto não encontrado.</p>

  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>R$ {produto.preco}</p>
    </main>
  )
}