import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios";

export default function WelcomePage() {
  const [episodeList, setEpisodeList] = useState([]);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => setEpisodeList(res.data.results))
      .catch(err => console.log(`Error fetching episodes: ${err}`));
    
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => setCharacterList(res.data.results))
      .catch(err => console.log(`Error fetching characters: ${err}`));

  }, [])

  return (
    <Container>
      <Row>
        <Col xs="12" sm="4">
          <h4>Episodes</h4>
          <ListGroup flush>
            {
              episodeList.map(episode => {
                return (
                  <ListGroupItem key={episode.id}>
                    <Link to={`/Episode/${episode.id}`}>{episode.name}</Link>
                    <div className="episodeDetail">
                      <div>{episode.episode}</div>
                      <div className="episodeDate">{episode.air_date}</div>
                    </div>
                  </ListGroupItem>
                )
              })
            }
          </ListGroup>
        </Col>
        <Col xs="12" sm="4">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <h1>Welcome to the ultimate fan site!</h1>
        </Col>
        <Col xs="12" sm="4">
          <h4>Characters</h4>
          <ListGroup flush>
            {
              characterList.map(character => {
                return (
                  <ListGroupItem key={character.id}>
                    ({character.status}) <Link to={`/Characters/${character.id}`}>{character.name}</Link>
                  </ListGroupItem>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
