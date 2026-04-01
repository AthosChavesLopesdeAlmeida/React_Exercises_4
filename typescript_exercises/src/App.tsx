import { useShop } from "./shop_final_exercise/context/UseShop"
import CardsGrid from "./shop_final_exercise/components/CardsGrid"

function App() {
  const {filteredProducts, toggleVisualization, filterByType} = useShop()

  return (
    <main>

      <section>
        <button onClick={() => toggleVisualization()}>Toggle visualization</button>
        <h1>Type Shop</h1>
        <select onChange={(e) => filterByType(e.target.value)}>
          <option value="all">Todos</option>
          <option value="physical">Físicos</option>
          <option value="digital">Digitais</option>
          <option value="service">Serviços</option>
        </select>
      </section>

      <section>
        <CardsGrid products={filteredProducts}/>
      </section>
    </main>
  )
}

export default App
