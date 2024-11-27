import { BsFillInfoCircleFill } from "react-icons/bs";
import "../css/feature.css";
const FeatureCard = (props) => {
    return (
        <div className="d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <BsFillInfoCircleFill />
            </div>
            <div>
                <h3 className="fs-2 text-body-emphasis">{props.title}</h3>
                <p>{props.text}</p>
                <a href="#" className="btn btn-primary">
                    Know More
                </a>
            </div>
        </div>

    );
}

export default FeatureCard;