import "./AboutUs.scss"
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutUs = () => {
    return (
        <>
            <section className="about-us">
                <Container>

                    <Row>
                        <Col xs={12} sm={6} md={8} >
                            <h1>About Us</h1>

                            <h5>
                                we believe in shaping futures through education. With a passion for excellence and a commitment to nurturing young minds, we've been a trusted name in educational services for [number] years. Our dedication to providing top-tier educational solutions has helped countless students achieve their academic goals and unlock their full potential.
                            </h5>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <img className="about-us-image" src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=2048x2048&w=is&k=20&c=IuF5Cnl9dFZdrubE-t8UNOT9OLr52sX1ER_i6eEooiM=" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutUs