import React from "react";
import { gql, useQuery } from "@apollo/client";
import Character from "./Character";

const FILTERED_QUERY = gql`
  query GetCharactersByStatus($status: String!, $pagina: Int!) {
    characters(page: $pagina , filter: {status: $status }) {
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
const Characters = (props) => {
  const {loading, error, data,refetch} = useQuery(FILTERED_QUERY, {
    variables: {pagina: props.pagina,status: props.status}
  });

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    console.log(error);
    console.log(props.pagina);
    return <div>Error...</div>;
  }
  return (
    <div>
       <button onClick={() => refetch()}>Actualizar</button>
      {data.characters.results.map((ch) => (
        <p key={ch.id}>{ch.name} {ch.status} {ch.species} {ch.gender} {ch.type}
         <img src={ch.image} ></img>
        </p>
      ))}
    </div>
  );
};


export default Characters;