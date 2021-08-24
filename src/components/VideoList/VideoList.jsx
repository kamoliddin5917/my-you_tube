import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ id, img, title }) => {
  return (
    <li className="video__list">
      <Link className="video__link" to={`/video/${id}`}>
        <img className="video__img" src={img} alt="a" />
        <h3 className="video__title">{title}</h3>
        <div className="video__information">
          <p className="video__information-data">80k views · 3 days ago</p>
          <p className="video__information-username">Dollie Blair</p>
        </div>
      </Link>
    </li>
  );
};

export default VideoList;
