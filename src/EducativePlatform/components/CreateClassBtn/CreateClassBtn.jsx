import { Link } from "react-router-dom";
import "./CreateClassBtn.css";
export const CreateClassBtn = () => {
  return (
    <div className="class-btn">
      <Link to="crear-clase">
        <img
          className="class-image"
          src="./assets/images/add-btn.png"
          alt="add-button"
        />
      </Link>
    </div>
  );
};
