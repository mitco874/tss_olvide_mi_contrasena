import { useNavigate, useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Mensajes.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { del, get, post } from "../../helpers";
export const Mensajes = () => {
  const [aportes, setAportes] = useState([]);
  const [mensajesRecibidos, setMensajesRecibidos] = useState([]);
  const { id_destino } = useParams();
  const navigate = useNavigate();
  const formularioSubir = { contenido: "" };
  const { form, onFormUpdate } = useForm(formularioSubir);
  const id_usuario = localStorage.getItem("id_usuario");
  console.log(id_destino);
  const getMensajesEnviados = async () => {
    const data = await get(
      `http://142.93.203.113:3001/api/myMessages?id_emisor=${id_usuario}&id_receptor=${id_destino}`
    );
    const data2 = await get(
      `http://142.93.203.113:3001/api/myMessages?id_emisor=${id_destino}&id_receptor=${id_usuario}`
    );

    const ar = data2.concat(data);
    let sorted = ar.sort((p1, p2) =>
      p1.id < p2.id ? -1 : p1.id > p2.id ? 1 : 0
    );
    setAportes(sorted);
  };
  const getMensajesRecibidos = async () => {};
  useEffect(() => {
    getMensajesEnviados();
  }, []);

  useEffect(() => {
    getMensajesRecibidos();
  }, []);
  const subirComentario = async (e) => {
    e.preventDefault();

    console.log(id_usuario);
    await post(`http://142.93.203.113:3001/api/myMessages`, {
      ...form,
      idUsuarioOrigen: id_usuario,
      idUsuarioDestino: id_destino,
    });
    getMensajesRecibidos();
    getMensajesEnviados();
  };

  return (
    <div className={styles.Titulo}>
      {typeof aportes[0] != "undefined" && (
        <h3>{aportes[0].nombre_completo}</h3>
      )}
      {console.log(aportes)}
      {aportes.map((usuario) =>
        id_usuario == usuario.id_emisor ? (
          <p className={styles.mensajeEnviado}>{usuario.contenido}</p>
        ) : (
          <p className={styles.mensajeRecibido}>{usuario.contenido}</p>
        )
      )}
      <form>
        <label htmlFor="titulocap" className={styles.textform}>
          {" "}
        </label>
        <input
          type="text"
          id="respuesta"
          name="contenido"
          placeholder="Deja un comentario"
          onChange={onFormUpdate}
          className={styles.box}
        />
        <button
          id="botonNuevoCap"
          type="button"
          // className={styles.button}
          className="btn btn-primary"
          onClick={subirComentario}
        >
          Subir{" "}
        </button>
      </form>
    </div>
  );
};
