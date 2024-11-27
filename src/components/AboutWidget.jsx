import { Col, Row } from "react-bootstrap";

const AboutWidget = () => {
    return (
        <Row>
            <Col lg={6}>
                <img src="https://via.placeholder.com/1000x550" className="w-100" alt="" />
            </Col>
            <Col lg={6}>
                <h6 className="text-info">About Us</h6>
                <h2 className="text-white">Best solar company in India</h2>
                <p className="text-white">Solar Energy Corporation of India (SECI) Ltd is the leading CPSU dedicated to the development and expansion of Renewable Energy (RE) capacity in India. As a step towards achieving national and international commitments, SECI has been named as one of the Renewable Energy Implementing Agencies (REIAs) of India which is continuously working towards fulfilling these goals and striving for sustainable development.</p>
                <button className="btn btn-info btn-lg mt-5">Know More</button>
            </Col>
        </Row>
    )
}

export default AboutWidget;