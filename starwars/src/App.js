//Importing dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Importing project files
import './App.css';
import Character from './components/Character.js';

//Styling
const WRAPPER = styled.div`
	width: 90%;
	max-width: 850px;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	padding: 20px;
`;

const HEADER = styled.h1`
@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
animation: flickerAnimation 1s infinite;
}
`;

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
		<div className="App">
			<HEADER className="Header">Characters</HEADER>
			<WRAPPER>
				{data.map((character) => {
					return (
						<p>
							<Character
								name={character.name}
								imgUrl={character.image}
								gender={character.gender}
								status={character.status}
								species={character.species}
								origin={character.origin.name}
								episode={character.episode.length}
							/>
						</p>
					);
				})}
			</WRAPPER>
		</div>
	);
};

export default App;
