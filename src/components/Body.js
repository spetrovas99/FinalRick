import React from 'react';
import Characters from "./Characters";
const Body = (props) => {
    return (
      <div className = "Body">
          <Characters characters = {props.characters} setCharacters = {props.setCharacters} pagina = "1"></Characters>
      </div>
    );
  };
  
  export default Body;