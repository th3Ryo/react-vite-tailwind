import React from 'react'
import {useFetch} from '../../Services/useFetch'
import { endPoints } from '../../Services/endPoints'
import {Card} from '../Components/Card'

//siempre que se piense en consumir informacion en este caso de la api se debe tener el useEffect

const Home = () => {
  const { items, error, isLoading } = useFetch("getAllItem");
  

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='grid gap-6 grid-cols-4 w-full max-w-screen-lg'>
          {items?.map(item => (    
          <Card 
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
          />
          ))}
        </div>
        )}
    </div>
  )
}

export {Home}