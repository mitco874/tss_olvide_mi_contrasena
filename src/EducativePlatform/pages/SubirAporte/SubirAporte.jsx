import { useState } from "react";
import styles from "./SubirAporte.module.css";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import { CodeEditor } from "../../../UI/components/CodeEditor/CodeEditor";
import { post } from "../../helpers";
export const SubirAporte = () => {
  const [titulocap, setTitulocap] = useState("");

  const [DescripEjem, setDescripEjem] = useState("");
  const [CodigoEjem, setCodigoEjem] = useState("");
  const formularioSubir = {
    id_usuario: "",
    titulo: "",
    descripcion: "",
    className: "",
    codigo: "",
  };
  const { form, onFormUpdate } = useForm(formularioSubir);
  const [codigo, setCodigo] = useState();
  const onCodeChange = (newValue) => {
    console.log(newValue);
    setCodigo(newValue);
  };

  const subirContrib = () => {
    const id_usuario = localStorage.getItem("id_usuario");
    console.log(id_usuario);
    post("http://142.93.203.113:3001/api/contributions", {
      ...form,
      codigo: codigo,
      id_usuario: id_usuario,
    });
  };
  return (
    <div className={styles.Titulo}>
      <p>Crear un nuevo aporte</p>
      <div className={styles.Class}>
        <br />
        <h1>Nueva Contribución</h1>
        <br />
        <form>
          <label htmlFor="titulocap" className={styles.textform}>
            Titulo:{" "}
          </label>
          <input
            type="text"
            id="titulocap"
            name="titulo"
            placeholder="Ingrese titulo"
            onChange={onFormUpdate}
            className={styles.box}
          />

          <br />
          <br />
          <label htmlFor="DescripEjem" className={styles.textform}>
            Descripción:
          </label>
          <input
            type="text"
            id="DescripEjem"
            name="descripcion"
            onChange={onFormUpdate}
            className={styles.box}
          />
          <br />
          <br />
          <label htmlFor="className" className={styles.textform}>
            Ingrese el ClassName:
          </label>
          <input
            type="text"
            onChange={onFormUpdate}
            name="className"
            className={styles.box}
          ></input>

          <br />
          <br />
          <label htmlFor="CodigoEjem" className={styles.textform}>
            Codigo del ejemplo:{" "}
          </label>
          <AceEditor
            mode={"Java"}
            value={codigo}
            fontSize={14}
            setOptions={{
              enableLiveAutocompletion: true,
              showLineNumbers: true,
            }}
            editorProps={{ $blockScrolling: false }}
            onChange={onCodeChange}
          />
        </form>
        <br />
        <br />
        <div className={styles.button}>
          <button
            id="botonNuevoCap"
            type="button"
            className="btn btn-primary"
            onClick={subirContrib}
          >
            Subir{" "}
          </button>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};
