import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import anime from "animejs";

function RippleAnime() {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      let randSquare = Math.floor(Math.random() * Math.floor(19));
      animationRef.current = anime({
        targets: ".square",
        scale: [
          { value: 1.3, easing: "easeOutSine", duration: 700 },
          { value: 1, easing: "easeInOutQuad", duration: 1500 }, // back to original size
        ],
        delay: anime.stagger(600, { grid: [4, 5], from: randSquare }), // spread speed
        loop: false,
      });
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Button className="animateBtn" onClick={animationRef.current}>
          Animate
        </Button>
        <Container>
          <Row>
            <Col>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </Col>
            <Col>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </Col>
            <Col>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </Col>
            <Col>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </Col>
            <Col>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default RippleAnime;