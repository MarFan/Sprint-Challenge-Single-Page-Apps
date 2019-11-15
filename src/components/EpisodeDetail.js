import React, {useState, useEffect} from "react";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios"

export default function EpisodeDetail(props) {
    const [episode, setEpisode] = useState([])
    const id = props.match.params.id;

    useEffect(() => {
        const characterRes =
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(res => setEpisode(res.data))
        .catch(err => console.log(`Error fetching episode: ${err}`))
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{episode.name}</h2>
                </Col>
            </Row>
            <Row>
                {/* <Col><img src={episode.image} /></Col> */}
                <Col>
                    <ListGroup className="detailList" flush>
                        <ListGroupItem><div className="label">Episode:</div> {episode.episode}</ListGroupItem>
                        <ListGroupItem><div className="label">Air Date:</div> {episode.air_date}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col>
                    &nbsp;
                </Col>
            </Row>
        </Container>
    )
}