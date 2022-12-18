import { useNavigate } from "react-router-dom";

export const PracticeCard = ({practiceData}) => {
    const navigate=useNavigate();
    const {id_practica,titulo_practica,contenido,enlace_practica}=practiceData;
        //description
  return (
    <div  className="d-flex justify-content-between mb-5 mx-auto w-50 shadow p-3 mb-5  rounded ">
        <p><b>Id: </b>{id_practica}  <b>Clase: </b>{titulo_practica}</p>
        <button className="btn btn-primary" onClick={()=>{navigate(`compilador/${id_practica}`)}}>Revisar</button>
    </div>
  )
}