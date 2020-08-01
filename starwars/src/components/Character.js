//Importing dependencies
import React from 'react';
import styled from 'styled-components';


const Character = props => {
     return (
          <div>
          <h1>{props.name}</h1>
          <img alt={props.name} src={props.imgUrl}/>
          <p>Bio:</p>
     </div>
     );
}

export default Character;