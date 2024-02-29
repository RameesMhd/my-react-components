import MyNavbar from "../components/Navbar/Navbar";
import CarouselFade from "./Carousel/MyCarousel";
import Container from "react-bootstrap/esm/Container";
import MyCards from "./Cards/MyCards";
import "./MainPage.scss";
import MyTabs from "./MyTabs";
import AboutUs from "./AboutUs";

const MainPage = () => {
    return (
        <>
            <MyNavbar />
            <CarouselFade />
            <AboutUs />

            <h2 className="our-identity">Our Identity</h2>
            <Container className="cards-container">
                <MyCards
                    title={"Mission"}
                    src={"https://sadectip.sirv.com/React%20Project%20Files/Mission.png"}
                    description={"At Tech Innovate, our mission is to empower individuals and businesses to thrive in a rapidly evolving digital world by providing innovative technological solutions that simplify complexity, foster creativity, and drive sustainable growth"}
                />
                <MyCards
                    title={"Vision"}
                    src={"https://sadectip.sirv.com/React%20Project%20Files/Vision.png"}
                    description={"Tech Innovate envisions a future where technology seamlessly integrates into every aspect of life, enhancing productivity, connectivity, and well-being. We aspire to be a leading force in driving technological advancement, shaping the digital landscape, and inspiring positive change globally."}
                />
                <MyCards
                    title={"Values"}
                    src={"https://sadectip.sirv.com/React%20Project%20Files/Values.png"}
                    description={"We embrace curiosity and creativity, constantly seeking new ideas, technologies, and approaches to solve complex challenges and drive progress"}
                />
            </Container>
            <Container>
                <h2 className="our-identity">Why we...</h2>
                <MyTabs />
            </Container>
        </>
    )
}
export default MainPage