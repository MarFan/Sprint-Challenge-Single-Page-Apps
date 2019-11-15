import React from "react";
import {Link} from "react-router-dom"
import {Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem} from "reactstrap";

export default function CharacterCard({character}) {
  return (
    <Col xs="6" sm="4">
      <Card key={character.id}>
        <CardImg top width="100%" src={character.image} alt={character.name} />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle><span className="label">Status:</span> {character.status}</CardSubtitle>
          <CardText>
            <ListGroup flush>
              <ListGroupItem><span className="label">Species:</span> {character.species}</ListGroupItem>
              <ListGroupItem><span className="label">Origin:</span> {character.origin.name}</ListGroupItem>
              <ListGroupItem><span className="label">Episodes:</span> {character.episode.length}</ListGroupItem>
            </ListGroup>
          </CardText>
          <Link to={`/Characters/${character.id}`} className="btn btn-primary">More Details</Link>
        </CardBody>
      </Card>
    </Col>
  )
}