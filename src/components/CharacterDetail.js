import React, {useState, useEffect} from "react";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios"

export default function CharacterDetail(props) {
    const [character, setCharacter] = useState([])
    const id = props.match.params.id;

    useEffect(() => {
        const characterRes =
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(`Error fetching character: ${err}`))
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{character.name}</h2>
                </Col>
            </Row>
            <Row>
                <Col><img src={character.image} /></Col>
                <Col>
                    <ListGroup className="detailList" flush>
                        <ListGroupItem><div className="label">Species:</div> {character.species}</ListGroupItem>
                        <ListGroupItem><div className="label">Gender:</div> {character.gender}</ListGroupItem>
                        <ListGroupItem><div className="label">Status:</div> {character.status}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    &nbsp;
                </Col>
            </Row>
        </Container>
    )
}