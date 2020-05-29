import React, { useState } from "react";
import "./App.css";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Character from "./components/Character";
import Header from "./components/Header";
import Pages from "./components/Pages";

const httpLink = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

function App() {
  const [name, setName] = useState(null);
  const [status,setStatus] = useState(undefined);
  const[page,setPage] = useState(1);

  const onSearch = (name) => {
    setName(name);
  };
  const onStatus =(status) =>{
    setStatus (status);
    console.log(status);
  }
   const siguiente = () =>{
     console.log("click");
     setPage(page+1);
   }
   const anterior = () =>{
      setPage(page-1);
      console.log(page);
   }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header  page={page} onStatus = {onStatus} onSearch = {onSearch} name = {name} status ={status}></Header>
       
        {name || status !=  null?  <Pages  page= {page} siguiente = {siguiente} anterior = {anterior}></Pages>: null}
      
      </div>
    </ApolloProvider>
  );
}

export default App;