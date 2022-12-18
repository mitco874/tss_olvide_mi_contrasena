import { useNavigate, useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Aporte.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { del, get, post } from "../../helpers";
import AceEditor from "react-ace";
export const Aporte = () => {
  const id_usuario = localStorage.getItem("id_usuario");
  const [aportes, setAportes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const formularioSubir = { contenido: "" };
  const { form, onFormUpdate } = useForm(formularioSubir);
  console.log(id);
  const getAportes = async () => {
    const data = await get(
      `http://142.93.203.113:3001/api/contributions/${id}`
    );
    setAportes(data);
    console.log(data);
  };
  useEffect(() => {
    getAportes();
  }, []);

  const subirComentario = async (e) => {
    e.preventDefault();

    console.log(id_usuario);
    await post(`http://142.93.203.113:3001/api/contribution/${id}/message`, {
      ...form,
      id_autor: id_usuario,
    });
    await obtenerComentarios();
  };
  const [comentarios, setComentarios] = useState([]);
  const obtenerComentarios = async () => {
    const data = await get(
      `http://142.93.203.113:3001/api/contribution/${id}/message`
    );
    console.log(data);
    setComentarios(data);
  };
  console.log(comentarios);
  useEffect(() => {
    obtenerComentarios();
  }, []);

  const eliminarComentario = async (id_comentario) => {
    await del(
      `http://142.93.203.113:3001/api/contribution/${id}/message/${id_comentario}`
    );
    obtenerComentarios();
  };
  return (
    <div className={styles.Titulo}>
      <h1>Aporte Reciente</h1>

      {aportes.map((aporte) => (
        <>
          <div className={styles.Class}>
            {/* <h3>{aporte.titulo}</h3> */}
            <img src={PerfilU} alt="" className={styles.foto} />
            <div>
              <p>
                {aporte.titulo}
                <h3>{aporte.nombre_completo}</h3>

                {aporte.descripcion}
                {/* {aporte.descripcion}{aporte.id} */}
              </p>
              <p className={styles.cod}>
                <AceEditor
                  mode="java"
                  name="UNIQUE_ID_OF_DIV"
                  fontSize={14}
                  value={aporte.codigo}
                  setOptions={{
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                  }}
                  editorProps={{ $blockScrolling: false }}
                />
              </p>
            </div>
            <br />
          </div>
        </>
      ))}
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

      <br />

      <div>
        {comentarios.map((comentario) => (
          <div className={styles.Class}>
            {/* <h3>{aporte.titulo}</h3> */}
            <img src={PerfilU} alt="" className={styles.foto} />
            <p>
              <h3>{comentario.nombre_autor}</h3>

              {comentario.contenido}
              {/* {aporte.descripcion}{aporte.id} */}
            </p>
            <h2>
              <div className={styles.margenBoton}>
                {id_usuario == comentario.id_autor && (
                  <button
                    type="button"
                    className="btn btn-danger mb-3"
                    onClick={() => {
                      eliminarComentario(comentario.id);
                    }}
                  >
                    Eliminar{" "}
                  </button>
                )}
              </div>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
