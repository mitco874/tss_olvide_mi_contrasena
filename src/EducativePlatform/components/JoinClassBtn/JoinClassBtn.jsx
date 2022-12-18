import { Link } from "react-router-dom";
import "./JoinClassBtn.css";
export const JoinClassBtn = () => {
  return (
    <div className="class-btn">
      <Link to="unirse-clase">
        <img
          className="class-image"
          src="./assets/images/add-btn.png"
          alt="add-button"
        />
      </Link>
    </div>
  );
};
