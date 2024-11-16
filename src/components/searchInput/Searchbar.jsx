import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Col, Container, Row } from "react-bootstrap";

const Searchbar = () => {
  const { SearchTable } = useContext(ApiContext);
  
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <input type="text" id="input" placeholder="Search..." onChange={SearchTable} style={{width: "400px"}} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Searchbar;
