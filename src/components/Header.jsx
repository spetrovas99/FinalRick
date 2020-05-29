import React from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import Character from "./Character";
import Characters from "./Characters";
const Header =(props) => {
    return(
        <div className ="Header">
            <button onClick ={() =>props.onStatus("Alive")}>alive</button>
            <button onClick ={() =>props.onStatus("Dead")}>dead</button>
            <button onClick ={() => props.onStatus("")}>all</button>

             <input id="name" placeholder="Nombre" />
            <button onClick={() => props.onSearch(document.getElementById("name").value)}>
          Buscar
        </button>
        {props.name !== null ? <Character name={props.name} pagina ={props.page} dato={props.dato}/> : null}
        {props.status !==  undefined ? <Characters status ={props.status} pagina ={props.page} dato={props.dato}/> : null}
        </div>
    )
}
export default Header;