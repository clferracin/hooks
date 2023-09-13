import { useState, useCallback } from 'react'
import Search from './Search'

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
  'cesar',
  'diogo',
]

export function Users() {

  const [users, setUsers] = useState(allUsers)
  const [count, setCount] = useState(0)

  
  const shuffleUsers = () => {
    setUsers(shuffle([...users]))
  }

  const increment = () => {
    setCount(count + 1)
  }

  function shuffle(names: string[]){
    return names.sort(() => Math.random() - 0.5);
  }

  const handleSearch = useCallback((text: string) => {
    console.log(users[0])
    const filteredUsers = allUsers.filter((user)=> user.includes(text),)
    setUsers(filteredUsers)
  },[users])
  

  console.log('renderizou Users...')

  return (
    <div>
      <Search onChange={handleSearch}/>
      <div className="namesSection">
        <div>
          <button onClick={shuffleUsers}>
            Shuffle
          </button>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
      <div className='countSection'>
        <button onClick={increment}>+</button>
        <p>{count}</p>
      </div>
    </div>
  )
}