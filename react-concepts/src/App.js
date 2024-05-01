import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  // Single Jinis Pathanor jonno
  /*
      const cricketer = ['Dhoni', 'Maxwell', 'Shakib', 'Kohli'];
      return (
        <div className='App'>
          <header className='App-header'>
            <p>I am a famous Person</p>
            <Person name="Shakil" job="Developer"></Person>
            <Person name="Siam" job="Student"></Person>
          </header>
        </div>
      );
    }
    // props = properties
    function Person(props) {
      return (
        <div style={{
          border: '2px solid green',
          margin: '10px',
          width: '400px'
        }}>
          <h3>My Name: {props.name}</h3>
          <p>My Profession: {props.job}</p>
        </div>
      )
    }
  
    */

  // Multiple Jinis Pathanor jonno

  const products = [
    
    { Name: 'photoshop', price: '$59' },
    { Name: 'Illustrator', price: '$99' },
    { Name: 'PDF Reader', price: '$6.99' }
  ]

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Practice</p>
        <MovieCounter></MovieCounter>
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'blue',
    height: '200px',
    width: '200px',
    margin: '5px',
    padding: '10px',
    float: 'left'
  }
  const { Name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{Name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);

  // const handleIncrease = () => setCount(count + 1);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} </li>)
        }
      </ul>
    </div>
  )
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of Movies: {count}</h3>
    </div>
  );
}
export default App;


