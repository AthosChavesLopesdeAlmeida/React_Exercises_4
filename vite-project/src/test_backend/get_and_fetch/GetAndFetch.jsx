import './get_and_fetch.css'
import React, { useState, useEffect } from 'react'

const GetAndFetch = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!result.ok) {
          throw new Error(`Erro ao buscar usuários: ${result.status}`)
        }

        const data = await result.json()
        setUsers(data)
      } catch (error) {
        setError(error.message)
        console.log('ERRO: ', error)        
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className='users_container'>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id} className='user'>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          )
        })
      )
      }
    </div>
  )
}

export default GetAndFetch