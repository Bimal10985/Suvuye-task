import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Circe from "../assets/circle.png";
import { FiSearch } from "react-icons/fi";
import Share from "../assets/share.png";

const Home = () => {
  return (
    <>
      <Container>
        <div className="navbar">
          <Link to="/" className="link">
            <img
              alt="Logo"
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <h3 className="title">Suvuya Dictionary</h3>
          </Link>
        </div>
        <div className="imput-wrapper">
          <FiSearch className="search-icon" />
          <form action="" style={{ width: "100%" }}>
            <input
              type="text"
              className="form-control input"
              placeholder="Apple"
            />
          </form>
        </div>
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
        <div className="image-footer">
          <img className="image" src={Share} alt="" />
        </div>
      </Container>
      {/* <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Suvaye Dictionary
          </Navbar.Brand>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Home;
