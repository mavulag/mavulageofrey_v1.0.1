import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/Projects/leaf.png";
import product from "../../assets/Projects/product-del.png";
import editor from "../../assets/Projects/codeEditor.png";
import chatify from "../../assets/Projects/chatify.png";
import suicide from "../../assets/Projects/suicide.png";
import bitsOfCode from "../../assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" key="product-del">
            <ProjectCard
              imgPath={product}
              isBlog={false}
              title="Product Delivery"
              description="Product Delivery"
              ghLink="https://github.com/mavulag/product-del"
              demoLink="https://product-del-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card" key="chatify">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AP-Powered Chatbot Platform"
              description="AP-Powered Chatbot Platform"
              ghLink="https://github.com/mavulag"
            />
          </Col>

          <Col md={4} className="project-card" key="bitsOfCode">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social Media Sentiment Analyzer"
              description="Social Media Sentiment Analyzer"
              ghLink="https://github.com/mavulag"
            />
          </Col>

          <Col md={4} className="project-card" key="editor">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Collaborative Code Editor"
              description="Collaborative Code Editor"
              ghLink="https://github.com/mavulag"
            />
          </Col>

          <Col md={4} className="project-card" key="leaf">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Personal Finance Tracker with Budgeting"
              description="Personal Finance Tracker with Budgeting"
              ghLink="https://github.com/mavulag"
            />
          </Col>

          <Col md={4} className="project-card" key="suicide">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-Learning Platform with Quizzes"
              description="E-Learning Platform with Quizzes"
              ghLink="https://github.com/mavulag"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
