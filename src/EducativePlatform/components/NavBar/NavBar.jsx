import  PropTypes from "prop-types";
import { existLogedUser } from "../../helpers";
import { LogoutBtn } from "../LogoutBtn/LogoutBtn";
import "./NavBar.css";

export const NavBar = ({color,userName,logged}) => {
  const fullName=localStorage.getItem("nombre_completo");

  return (
    <nav className={`nav-bar d-flex justify-content-between flex-row shadow-sm p-3 bg-${color}`} >
        <div className="d-flex flex-row">
            <div className="logo-image"></div>
            <h1>Plataforma Educativa</h1>
        </div>
        <div>
            {(fullName!=="" && fullName!==null)? <><div className="">{fullName}</div><LogoutBtn/></> :<></> }
        </div>

    </nav>
  )
}

NavBar.propTypes={
  color:PropTypes.string.isRequired,
  userName:PropTypes.string
}

NavBar.defaultProps={
  color:"white",
  userName:"",
}

