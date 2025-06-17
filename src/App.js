import {useState} from 'react';
import './App.css';
import Contact from './Contact';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
    const [greet, setGreet] = useState({greet : "hello"});
    console.log(greet, setGreet);

    function updateGreet() {
      const newGreet = {...greet};
      newGreet.greet = "Hello";
      setGreet(newGreet);
    }

    return (
    <>
      <div>
        <h1>{greet.greet}</h1>
        <button onClick={updateGreet}>Update Greeting</button>
      </div>
    </>
  );
}

export default App;