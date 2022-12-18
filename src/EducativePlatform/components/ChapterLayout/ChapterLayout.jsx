import { useNavigate } from 'react-router-dom';

import { del } from '../../helpers';

export const ChapterLayout = ({ capitulo,idCapitulo,onReloadChapters }) => {
  const navigate=useNavigate();
  const {id_capitulo,titulo_capitulo,titulo_material,descripcion_material,titulo_foro,estado_foro,descripcion_foro} = capitulo;
  
  const user_rol = localStorage.getItem("id_rol");
  const MaterialTitleTrim = titulo_material.trim();
  const ForumTitleTrim = titulo_foro.trim();
  const ChapterTitleTrim = titulo_capitulo.trim();

const eliminarCapitulo=async(e)=>{
  e.preventDefault();
  await del("http://142.93.203.113:3001/api/chapters/"+idCapitulo)  
  
 await onReloadChapters();  
}

const editarCapitulo=(e)=>{
  e.preventDefault(); 
  navigate(`editar-capitulo/${idCapitulo}`)
}

  

  return (
    <div
      className="accordion accordion-flush mb-5"
      id={`accordionFlushExample-a`}
    >
      <div className="d-flex flex-row justify-content-between">
        <h4>{titulo_capitulo}</h4>
        <div className="d-flex me-0 h-50">
        <button className="btn btn-outline-primary me-1" onClick={()=>navigate(`capitulo/${id_capitulo}/tareas`)}>Revisar tareas</button>
        {user_rol === "3" ? (
          <>
            <button className="btn btn-primary me-1" onClick={editarCapitulo}>Editar</button>
            <button className="btn btn-black me-1" onClick={()=>navigate(`capitulo/${id_capitulo}/crear-tarea`)}>Agregar tarea </button>
            <button className="btn btn-danger" onClick={eliminarCapitulo}>Eliminar</button>
          </>
        ) : (
          <></>
        )}</div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading-a`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-a`}
            aria-expanded="false"
            aria-controls={`#flush-collapse-a`}>
            <b>Material:</b> {titulo_material}
          </button>
        </h2>
        <div
          id="flush-collapse-a"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading-a"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            {descripcion_material}
            <button
              className="text-light py-2 px-3  d-block my-3"
              style={{ backgroundColor: "#1D2939", borderRadius: "20px" }}
              onClick={()=>{navigate(`material/${id_capitulo}`)}}>
              Revisar
            </button>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading-b`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-b`}
            aria-expanded="false"
            aria-controls={`#flush-collapse-b`}
          >
            <b>Foro:</b> {titulo_foro}{" "}
            {estado_foro === 0 ? <p>[cerrado]</p> : <p>[abierto]</p>}
          </button>
        </h2>
        <div
          id="flush-collapse-b"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading-b"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {descripcion_foro}
            <button
              className="text-light py-2 px-3  d-block my-3"
              style={{ backgroundColor: "#1D2939", borderRadius: "20px" }}
              onClick={()=>{navigate(`foro`)}}>
              Revisar
            </button>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading-c`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-c`}
            aria-expanded="false"
            aria-controls={`#flush-collapse-c`}
            onClick={()=>{navigate(`practica/${id_capitulo}`)}}
          >
            <b>Ejemplos</b>
          </button>
        </h2>
        <div
          id="flush-collapse-c"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading-c"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <button
              className="text-light py-2 px-3  d-block my-3"
              style={{ backgroundColor: "#1D2939", borderRadius: "20px" }}
            >
              Revisar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

ChapterLayout.defaultProps = {
  chapterId: -1,
};

// ChapterLayout.propTypes={
//     chapterId:PropTypes.number.isRequired()
// }
