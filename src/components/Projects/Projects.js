import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import english from "../../Assets/Projects/english.png";
import suicide from "../../Assets/Projects/suicide.png";
import gemini from "../../Assets/Projects/gemini.png";

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
                            imgPath={english}
                            isBlog={false}
                            title="English Dictionary"
                            description="Created a React-based dictionary offering real-time word search
 with definitions, synonyms, antonyms, pronunciation, and usage
 examples."
                            ghLink="https://github.com/usha1116/English_dictionary"
                            demoLink="https://english-dictionary-2ba5.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gemini}
                            isBlog={false}
                            title="Bits-0f-C0de"
                            description="Designed a responsive chat web app using ReactJS and Tailwind CSS
                            with dynamic UI, API integration, and real-time messaging features."
                            ghLink="https://github.com/usha1116/gimini"
                            demoLink="https://gimini-theta.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Authentication "
                            description="Developed secure user authentication using React, Node.js, Express,
 MongoDB, and JWT for user signup, login, and protected route
 handling. "
                            ghLink="https://github.com/usha1116/authentication"
                            demoLink="https://authentication-six-inky.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="StudyUnify website "
                            description="A React-Redux dashboard for managing roles, subjects, batches, and
 test schedules with dynamic forms, validation, modals, and real-time
 table updates for streamlined school administration."
                            ghLink="https://github.com/usha1116/studyUnify_web"
                           // demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Book Store "
                            description="Built a full-stack bookstore app with an admin dashboard for book
 management, inventory control, cart functionality, and cash-on
delivery order placement. "
                            ghLink="https://github.com/usha1116/Book_Store"
                        // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="Photo Album"
                            description="Built a photo gallery using HTML, CSS, and JavaScript with features
 for image search, downloads, and author attribution. "
                            ghLink="https://github.com/usha1116/Photo_Gallerie"
                        demoLink="https://photo-gallerie.vercel.app/"      
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
