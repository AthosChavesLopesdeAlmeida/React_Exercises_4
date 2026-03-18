import './get_and_fetch.css'
import useFetch from '../use_fetch/UseFetchHook'

const GetAndFetch = () => {
  const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className='users_container'>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error: {error}</h2>
      ) : (
        data.map((user) => {
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