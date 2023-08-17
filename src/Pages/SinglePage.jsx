import React from "react";
import { Container, Nav } from "react-bootstrap";
import Circe from "../assets/circle.png";

const SinglePage = () => {
  return (
    <>
      <Container>
        <h2 className="title-text">Word:Apple</h2>
        <div className="contentWrapper">
          <div className="circle">
            <img src={Circe} alt="" />
            <p className="text">/ˈæp.əl/</p>
          </div>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">noun</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">verb</Nav.Link>
            </Nav.Item>
          </Nav>

          <ol className="order-list">
            <li className="listing">
              A common, round fruit produced by the tree Malus domestica,
              cultivated in temperate climates.
            </li>
            <li className="listing">
              Any of various tree-borne fruits or vegetables especially
              considered as resembling an apple; also (with qualifying words)
              used to form the names of other specific fruits such as custard
              apple, rose apple, thorn apple etc.
            </li>
          </ol>
        </div>
      </Container>
    </>
  );
};

export default SinglePage;
