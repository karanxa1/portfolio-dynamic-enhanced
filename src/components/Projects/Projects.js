import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/attendance.jpg";

import bitsOfCode from "../../Assets/Projects/vehicledetect.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Atttendance management system"
              description="Attendance monitoring webapp for college project."
              ghLink="https://github.com/karanxa1/newattendance"
              demoLink="https://github.com/karanxa1/newattendance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Vehicle detection"
              description="Vehicle detection using OpenCV and YOLO."
              ghLink="https://github.com/karanxa1/vehicledetectorpy"
              demoLink="https://github.com/karanxa1/vehicledetectorpy"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
