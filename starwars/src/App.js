//Importing dependencies
import React, { useEffect, useState } from 'react';

//Importing project files
import './App.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] =useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const data = response.data.results;
        //testing
            console.log(data);

        setData(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
      }, []);

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
      {/* testing information display*/}
      <div>
      <p>{data.id}</p>
      </div>
    </div>
  );
}

export default App;
