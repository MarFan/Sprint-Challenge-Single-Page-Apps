import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

import SearchForm from "./SearchForm";

import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log(`Uh oh! ${err}`));
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setSearchResults(results)
  }, [characters, searchTerm])

  const searchHandler = e =>{
    setSearchTerm(e.target.value);
  }

  return (
    <section className="character-list">    
      <Container>
        <SearchForm searchTerm={searchTerm} searchHandler={searchHandler} />          
        <Row>
          {
            searchResults.map(c => {
              return <CharacterCard key={c.id} character={c} />
            })
          }
        </Row>
      </Container>
    </section>
  );
}
