//Importing dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Importing project files
import './App.css';
import Character from './components/Character.js'

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [data, setData] = useState([]);

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/`)
			.then((response) => {
				const data = response.data.results;
        setData(data);
        //testing
				console.log(data);				
			})
			.catch((error) => {
				console.log('Error:', error);
			});
	}, []);

	return (
		<div className='App'>
			<h1 className='Header'>Characters</h1>
			{data.map((character) => {
				return (
					<p>	
            <Character name={character.name} imgUrl={character.image}/>
					</p>
				);
			})}
		</div>
	);
};

export default App;
