import "./AboutUs.scss"
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const AboutUs = () => {
    return (
        <>
            <section className="about-us"  id="about">
                {/* <Container> */}

                <Row>
                    <Col className="about-us-content" xs={12} sm={6} md={6} >
                        <h3>About Us</h3>

                        <p>
                            {/* be1e11 */}
                            Education in taking a new sense of direction
                            and Perception. EMORY Educational institution
                            impact the new mode of quality education of
                            the aspiring students. the 20+ years of
                            Experience and reputed professionals and
                            their successful journey resulted in the
                            establishment of emory educational institution.
                            we aim at the experimental Learning of the
                            students and the empowerment of rural
                            education the programs provided at emory
                            are plus one plus two degree and p g courses,
                            pre primary teacher training course a part
                            from the academic u.k accredited Montessori
                            teachers training course apart from the
                            Academic programs emory focuses on the
                            morals and values being good Human. emory
                            emphasis on the skill based and service
                            oriented molding of the students.
                        </p>
                        <Button variant="outline-light">Read more</Button>{' '}
                    </Col>
                    {/* <div className="about-us-devider">
                        <img src="https://sadectip.sirv.com/React%20Project%20Files/logo-black.png"></img>
                    </div> */}
                    <Col xs={12} sm={6} md={6} className="about-us-image-wrapper">
                        <img className="about-us-image" src="https://sadectip.sirv.com/React%20Project%20Files/webeducation.png" />
                    </Col>
                </Row>
                {/* </Container> */}
            </section>
        </>
    )
}
export default AboutUs