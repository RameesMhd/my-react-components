import React from 'react';
import MyNavbar from "../components/Navbar/Navbar";
import CarouselFade from "./Carousel/MyCarousel";
import Container from "react-bootstrap/esm/Container";
import MyCards from "./Cards/MyCards";
import "./MainPage.scss";
import AboutUs from "./AboutUs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainPage = () => {
    const aboutData = [
        {
            title: "Our Mission",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "Emory focuses on service through knowledge and to inspire curiosity and discovery for success in a rapidly changing world"
        },
        {
            title: "Vision",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: " To educate young minds and foster ethical, social and moral values through holistic learning and groom them into responsible global citizens."
        },
        {
            title: "Integrity",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We act with integrity and honesty in accordance with the highest academic, professional and ethical standards."
        },
        {
            title: "Respect",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We respect and honor the dignity of each person, embrace civil discourse and foster a diverse and inclusive community."
        },
        {
            title: "Responsibility",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We act responsibly and we are accountable for our decisions, actions and their consequences"
        },
        {
            title: "Discovery",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We seek and create new knowledge understanding and foster creativity and innovation for the benefit of our communities, societies and the environmentev"
        },
        {
            title: "Excellence",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We strive for excellence in all our endeavors as individuals, an institution and a leader in higher education."
        },
        {
            title: "Community",
            src: "https://sadectip.sirv.com/React%20Project%20Files/Mission.png",
            description: "We work together for the betterment of our institution, the university we affiliated, the communities we serve and the world."
        }
    ];

    // Splitting the aboutData into two arrays for left and right columns
    const leftColumnData = aboutData.slice(0, 4);
    const rightColumnData = aboutData.slice(4);

    return (
        <>
            <MyNavbar />
            <section id="home">
                <CarouselFade />
            </section>
            <AboutUs />

            <Row className="justify-content-center w-100">
                <Col className='left-col' lg={6} md={6} sm={12}>
                    {leftColumnData.map((card, index) => (
                        <MyCards
                            key={index}
                            title={card.title}
                            src={card.src}
                            description={card.description}
                        />
                    ))}
                </Col>
                <Col className='right-col' lg={6} md={6} sm={12}>
                    {rightColumnData.map((card, index) => (
                        <MyCards
                            key={index}
                            title={card.title}
                            src={card.src}
                            description={card.description}
                        />
                    ))}
                </Col>
            </Row >
            <Container>
                <h2 className="our-identity">Why we...</h2>
                {/* Include your MyTabs component here */}
            </Container>
        </>
    )
};

export default MainPage;
