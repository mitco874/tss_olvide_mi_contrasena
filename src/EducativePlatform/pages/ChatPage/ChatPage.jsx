import { useNavigate, useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./ChatPage.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { del, get, post } from "../../helpers";
export const ChatPage = () => {
  const [usuarios, setUsers] = useState([]);
  const navigate = useNavigate();
  const id_usuario = localStorage.getItem("id_usuario");
  const getUseres = async () => {
    console.log(id_usuario);
    const data = await get("http://142.93.203.113:3001/api/users");
    setUsers(data);
    console.log(usuarios);
  };
  useEffect(() => {
    getUseres();
  }, []);

  return (
    <div className={styles.Titulo}>
      <h1>Compañeros</h1>
      <div className={styles.orden}>
        {usuarios.map(
          (usuario) =>
            usuario.id != id_usuario && (
              <>
                <div className={styles.Class}>
                  {/* <h3>{aporte.titulo}</h3> */}
                  <img src={PerfilU} alt="" className={styles.foto} />
                  <p>
                    <h3>{usuario.nombre_completo}</h3>({usuario.rol})
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          navigate("mensaje/" + usuario.id);
                        }}
                      >
                        Enviar mensaje{" "}
                      </button>
                    </div>
                  </p>
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};
