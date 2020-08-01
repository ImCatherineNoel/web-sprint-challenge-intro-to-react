//Importing dependencies
import React from 'react';
import styled from 'styled-components';

//Styling
const CARD = styled.div`
	background: black;
	color: white;
	width: 150px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin: 5px;
	padding-bottom: 35px;
	border-radius: 15px;
`;
const IMAGE = styled.img`
	width: 100px;
	height: 100px;
	object-fit: scale;
	flex-shrink: 2;
`;
const NAME = styled.div`
     font-size: 1rem;
     padding 20px 0;
	text-decoration: overline dotted red;
`;
const BIO = styled.div`
	display: block;
	text-decoration: none;
	width: 80%;
	text-align: left;
`;
const INFO = styled.div`
	display: block;
	text-decoration: none;
	width: 80%;
	text-align: left;
	font-size: 0.5rem;
	line-height: 1rem;
`;

const Character = (props) => {
	return (
		<CARD>
			<NAME>{props.name}</NAME>
			<IMAGE alt={props.name} src={props.imgUrl} />
			<BIO>Bio:</BIO>
			<INFO>
				Gender: {props.gender}
				<br />
				Status: {props.status}
				<br />
				Species: {props.species}
				<br />
				Origin: {props.origin}
				<br />
				Episodes: {props.episode}
				<br />
			</INFO>
		</CARD>
	);
};

export default Character;
