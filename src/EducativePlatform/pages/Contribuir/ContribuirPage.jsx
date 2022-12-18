import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./ContribuirPage.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import RevisarAporte from "../Contribuir/fotos/RevisarAporte.jpg";
import SubirAporte from "../Contribuir/fotos/SubirAporte.jpg";
import { useEffect, useState } from "react";
import { get } from "../../helpers";
export const ContribuirPage = () => {
  const [aportes, setAportes] = useState([]);
  const navigate = useNavigate();
  const getAportes = async () => {
    const id_usuario = localStorage.getItem("id_usuario");
    console.log(id_usuario);
    const data = await get("http://142.93.203.113:3001/api/contributions");
    setAportes(data);
    console.log(aportes);
  };
  useEffect(() => {
    getAportes();
  }, []);
  return (
    <div>
      <h1 className={styles.tituloh1}>Mis aportes</h1>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <Link to={`/clases/contribuir/MisAportes`}>
            <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
            <p className={styles.Cuadradop}>Revisar mis aportes</p>
          </Link>
        </div>

        <div className={styles.Cuadro}>
          <Link to={`/clases/contribuir/SubirAporte`}>
            <img src={SubirAporte} alt="" className={styles.fotoCuadro2} />
            <p className={styles.Cuadradop}>Subir aporte</p>
          </Link>
        </div>
      </div>

      <div>
        <h1 className={styles.tituloh1}>Aportes recientes: </h1>
      </div>

      <div className={styles.Titulo}>
        {/* <Link to={`/clases/contribuir/Aporte`}> */}
        {aportes.map((aporte) => (
          <div
            className={styles.Class}
            onClick={() => {
              navigate("aporte/" + aporte.id);
            }}
          >
            {/* <h3>{aporte.titulo}</h3> */}
            <img src={PerfilU} alt="" className={styles.foto} />
            <p>
              {aporte.titulo}
              <h3>{aporte.nombre_completo}</h3>

              {aporte.descripcion}
              {/* {aporte.descripcion}{aporte.id} */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
