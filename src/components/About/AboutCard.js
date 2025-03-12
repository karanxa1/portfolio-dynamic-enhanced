import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karan Rajput </span>
            from <span className="purple"> Pune, INDIA.</span>
            <br /> I am a student currently enrolled in college.
            <br />
            Additionally, I am currently in my growth phase.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technology reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Finding and trying the latest in Tech world
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">KARAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
