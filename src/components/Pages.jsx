import React from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const Header =(props) => {
    return(
        <div className ="Header"> 
        {console.log(props.dato)}
           
            {props.page > 1? <button onClick ={() => props.siguiente()}>pag. siguiente</button> : null}
            {props.page}
           
            <button onClick ={() => props.siguiente()}>pag. siguiente</button>
          
          
        </div>
    )
}
export default Header;