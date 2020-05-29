import React from "react";
import { useQuery, gql} from "@apollo/client";
import { useState } from "react";

const QUERY = gql`
  query GetCharactersByName($name: String!, $pagina:Int!) {
    characters(page: $pagina, filter: { name: $name }) {
      results {
        name
        id
        status
        image
        species
        type
        gender
        location{
          name
          dimension
        }
      }
    }
  }
`;



const Character = (props) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(QUERY, {
    variables: { name: props.name, pagina: props.pagina},
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === 4) return <p>Refetching...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Character not found!</p>;
  const moreInfo = (ch) =>{
   console.log(ch);
  return( <div>
     {ch.location.dimension}
   </div>);
   
  }
  return (
    <div>
      <button onClick={() => refetch()}>Actualizar</button>
     
      {data.characters.results.map((ch) => (
       
        <p key={ch.id}>{ch.name} {ch.status} {ch.species} {ch.gender} {ch.type}
         <img src={ch.image} ></img>
       <div onClick = {() => moreInfo(ch)}>{ch.location.name}</div>
        </p>
      ))}
    </div>
  );
};

export default Character;