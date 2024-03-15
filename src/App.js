import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "0 auto",
                float: "none",
                marginBottom: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={logo}
                style={{
                  borderStyle: "solid",
                  borderColor: "lightgray",
                  textAlign: "center",
                }}
              />{" "}
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card 's content.{" "}
                </Card.Text>{" "}
                <Button variant="primary"> Go somewhere </Button>{" "}
              </Card.Body>{" "}
            </Card>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
      <p>
        {" "}
        Dolor ipsum et nulla duis incididunt adipisicing.Laboris irure ad aliqua
        proident officia esse deserunt mollit cillum.Amet aliquip dolor commodo
        nisi reprehenderit ea excepteur ipsum.Ea non ut irure proident elit
        esse.Sunt deserunt mollit amet laborum elit incididunt occaecat
        consectetur aute reprehenderit fugiat officia elit.Tempor mollit non
        velit et in aliquip elit aliquip officia exercitation dolore aliquip est
        anim.Deserunt in culpa incididunt sunt.Magna et voluptate qui dolor esse
        laborum fugiat veniam quis.Aliquip est dolor nulla adipisicing ex
        ullamco fugiat laborum esse ad cupidatat.Sint minim id consequat
        consectetur aliqua anim aliqua tempor dolor qui deserunt cillum.Duis
        ipsum et nisi duis commodo do aute incididunt veniam nisi ad in
        .Pariatur velit sint nulla fugiat occaecat eiusmod ullamco.Aute minim
        officia excepteur et eu.Aliquip labore velit nisi ipsum id est et minim
        ipsum magna ut eiusmod.Fugiat ut dolore nulla consequat ad id sit aliqua
        exercitation Lorem.Labore qui commodo id non.Non anim eiusmod in ad
        ullamco non deserunt.{" "}
      </p>{" "}
    </div>
  );
}

export default App;
