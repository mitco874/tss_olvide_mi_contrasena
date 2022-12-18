import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { Loading } from "../../../UI";
import { MaterialCard } from "../../components";
import styles from "./MisAportes.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { del, get } from "../../helpers";
import { async } from "q";
import { useState } from "react";
export const MisAportes = () => {
  const [aportes, setAportes] = useState([])
  const navigate = useNavigate()
  const getAportes = async() =>{
    const id_usuario = localStorage.getItem("id_usuario")
    console.log(id_usuario)
    const data = await get("http://142.93.203.113:3001/api/contributions/?user="+id_usuario)
    setAportes(data)
    console.log(aportes)
  }
  useEffect(()=>{
    getAportes()
  },[])
  
 const eliminarAporte = async(id_aporte) => {
  
  await del("http://142.93.203.113:3001/api/contributions/"+ id_aporte)
  getAportes()
 }

  return (
    <div className={styles.Titulo}>
      <h1>Mis aportes</h1>
      {aportes.map((aporte)=>(<div className={styles.Class} >
        {/* <h3>{aporte.titulo}</h3> */}
        <img src={PerfilU} alt="" className={styles.foto} />
        <p>
          {aporte.titulo}
          <h3>
          {aporte.nombre_completo}
          </h3>

          {aporte.descripcion}
          {/* {aporte.descripcion}{aporte.id} */}
        </p>

        <button type="button" className={styles.button} onClick={ ()=> {eliminarAporte(aporte.id)}}>
          Eliminar{" "}
        </button>
      </div>))}   
    
    </div>
  );
};
