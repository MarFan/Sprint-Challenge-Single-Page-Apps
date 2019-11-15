import React from "react";
import {Row, Col, FormGroup, Input} from 'reactstrap'

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <Row className="justify-content-end">
        <Col xs="12" sm="4">
          <FormGroup>
            <Input id="searchInput" value={props.searchTerm} onChange={props.searchHandler} type="text" placeholder="Search Characters" />
          </FormGroup>
        </Col>
      </Row>
    </section>
  );
}
