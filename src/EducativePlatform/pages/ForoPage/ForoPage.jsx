import { useState } from 'react';

import { useParams } from 'react-router-dom';

import {
  useFetch,
  useForm,
} from '../../../hooks';
import { del } from '../../helpers';
import { post } from '../../helpers/post';
import styles from './ForoPage.module.css';

export const ForoPage = () => {

  const [mensajem, setDescripCom] = useState("");
  const formularioSubir = {
    contenido: ""
  };
  const { form, onFormUpdate } = useForm(formularioSubir);
  

  const { id} = useParams();
  const { content, fetchData } = useFetch(`http://142.93.203.113:3001/api/chapters/${id}/forum`, "GET");
  const { isLoading, hasError } = content;
  
  const { descripcion_foro, titulo_foro, mensajes, id_mensaje, autor, mensaje } = content.data;
  console.log(mensajes)
  const id_rol = localStorage.getItem("id_rol");

  const subirContrib = async(e) => {
    e.preventDefault();
    const id_usuario = localStorage.getItem("id_usuario");
    console.log(id_usuario);
    const nombre_completo = localStorage.getItem("nombre_completo")
    await post(`http://142.93.203.113:3001/api/chapter/${id}/forum`, {...form, autor: nombre_completo}); 
    await fetchData();
  };

  
  const eliminarComentario=async(id_mensaje)=>{
    console.log(id_mensaje);
    await del(`http://142.93.203.113:3001/api/chapter/1/forum/message/${id_mensaje}`);
    await fetchData();
  }

  return (
    <div className="mt-3">
     
       <h3>Titulo del foro: {titulo_foro}</h3>
        <p>Descripcion:{descripcion_foro}</p>
        
        {typeof(mensajes)!=="undefined" &&
        mensajes.map((mensaje)=>(
        <>
          <div className={styles.Titulo}> 
            <b>{mensaje.autor}</b> </div> 
            <div>{mensaje.mensaje}    </div> 
            {id_rol==="3"&& <button className='btn btn-danger' onClick={()=>{eliminarComentario(mensaje.id_mensaje)}}>eliminar</button>}
          <br/>
          <br/>
        </>))}


        <div className={styles.Titulo}>
      <p>Nuevo Comentario:  </p>
      <div className={styles.Class}>
        <form>
          <label htmlFor="mensaje" className={styles.textform}>
            Comentario:
          </label>
          <input
            type="text"
            id="mensaje"
            name="contenido"
            onChange={onFormUpdate}
            className={styles.box}
          />
          <br />
          <br />           
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

    </div>
  );
  
};