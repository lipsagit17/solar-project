import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import MainFooter from "../components/MainFooter";
import MainNavBar from "../components/MainNavBar";
import MyBreadcrumb from "../components/MyBreadcrumb";
import MySlider from "../components/MySlider";
import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";
import AboutWidget from "../components/AboutWidget";

function Home() {
    return (
        <div>
            <MainNavBar />
            {/* <HeroSection />
            <ProductCard />
            <MainFooter /> */}
            {/* <MyBreadcrumb mainlink="Home" pagename="Homepage" /> */}
            {/* <MyBreadcrumb mainlink="About" pagename="About" /> */}
            <MySlider />
            <Container className="px-4 py-5">
                <Row>
                    <Col md={4}>
                        <FeatureCard title="Produces Electricity" text="Using solar panels is a very practical way to produce electricity for many applications. The obvious would have to be off-grid living. Living off-grid means living in a location that is not serviced by the main electric utility grid." />
                    </Col>
                    <Col md={4}>
                        <FeatureCard title="Renewable Energy" text="Besides the fact that solar panels make it possible to live off-grid, perhaps the greatest benefit that you would enjoy from the use of solar power is that it is both a clean and a renewable source of energy." />
                    </Col>
                    <Col md={4}>
                        <FeatureCard title="Saves Money" text="For grid-tie solar power system owners, the benefits begin from the moment the system comes online, eliminating monthy electric bills or, actually earning the system's owner additional income from the electric company." />
                    </Col>
                </Row>
            </Container>
            <section style={{ "margin": "30px 0px", "padding": "80px 0px", "backgroundColor": "#000" }}>
                <Container>
                    <AboutWidget />
                </Container>
            </section>
            <MainFooter />
        </div>
    )
}

export default Home;