import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./ClassCard.css";
/////////////
export const ClassCard = ({ id, title,archivado,reload }) => {
  const user_rol=localStorage.getItem("id_rol");
  const navigate=useNavigate();
  const archive=async()=>{
    await updateArchiveStatus(`http://142.93.203.113:3001/api/class/${id}/unarchive`);
    reload();
  }

  const unarchive=async()=>{
    await updateArchiveStatus(`http://142.93.203.113:3001/api/class/${id}/archive`);
    reload();
  }

  const updateArchiveStatus= async(url)=>{
    const rawResponse = await fetch(url, {
      method: "PATCH",
      headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"}
    });

    const res = await rawResponse.json();
    console.log(res);
  }

  return (
<>
    <div className="card class-card shadow-sm m-2 bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">
      <img
        className="card-img-top card-image "
        src="./assets/images/class-background.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <p className="card-text">
          <b>{title}</b>
        </p>
        {user_rol==="3"?<p className="card-text">codigo de clase: {id}</p>:<></> }
        <br />
        <button className="btn btn-outline-secondary me-1" onClick={()=>{navigate(`/clases/${id}`)}} >Revisar</button>
        {user_rol==="3" && <>     
             {archivado===true?
            <button className="btn btn-outline-secondary" onClick={()=>{unarchive()}}>Habilitar clase</button>:
            <button className="btn btn-outline-secondary" onClick={()=>{archive()}}>Archivar clase</button>
          }
        </>

        }
      </div>
    </div>
</>
  );
};
ClassCard.defaultProps = {
  title: "title not found",
  id: -1,
  idVisible:"false"
};

ClassCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  idVisible: PropTypes.string,
};
