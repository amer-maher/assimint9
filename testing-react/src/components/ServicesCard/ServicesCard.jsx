import { Link } from "react-router-dom";

const ServicesCard = ({ imgLink, des, routTo, alt }) => {
     return (
        <Link to={`/services/${routTo}`}> 
            <div className="card" style={{ width: 240 }}>
                <img src={imgLink || "https://via.placeholder.com/240"} className="card-img-top" alt={alt || "Card image"} />
                <div className="card-body">
                    <p className="card-text">{des || "No description available"}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServicesCard;