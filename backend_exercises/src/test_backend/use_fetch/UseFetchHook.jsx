import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const result = await fetch(url)
  
          if (!result.ok) {
            throw new Error(`Erro ao buscar usuários: ${result.status}`)
          }
  
          const data = await result.json()
          setData(data)
        } catch (error) {
          setError(error.message)
          console.log('ERRO: ', error)        
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchUsers()
    }, [url])

  return { data, isLoading, error }
}

export default useFetch