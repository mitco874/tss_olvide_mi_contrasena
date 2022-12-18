import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import { useForm } from '../../../hooks';
import { post } from '../../helpers';

export const NewContentForm = () => {
  const navigate=useNavigate();
  const {id}=useParams();

  const initialFormState={
    titulo_capitulo:"",
    titulo_material:"",
    descripcion_material:"",
    enlace_material:"",
    titulo_foro:"",
    descripcion_foro:"",
    estado_foro:"0",
    titulo_ejemplo:"",
    descripcion_ejemplo:"",
    codigo_ejemplo:""}

  const{form,onFormUpdate}=useForm(initialFormState);


  const onCreateContent=(e)=>{
    e.preventDefault();
    post("http://142.93.203.113:3001/api/chapters",{...form,id_clase:id})
    navigate(-1)
  }

  const onReturn=(e)=>{
    e.preventDefault();
    navigate(-1)
  }


  return (
      <form className="mx-auto border border-dark rounded h-75 w-50 p-3 mt-3">
      <h3>Crear Tema</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del tema</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del capítulo"
            name="titulo_capitulo"
            onChange={onFormUpdate}
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del material</label>
          <input 
              type="text" 
              className="form-control" 
              placeholder="URL"
              name="titulo_material"
              onChange={onFormUpdate} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del material
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del material subido"
            name="descripcion_material"
            onChange={onFormUpdate}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese el enlace del material
          </label>
          <input 
              type="text" 
              className="form-control" 
              placeholder="URL"
              name="enlace_material"
              onChange={onFormUpdate}
              />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del foro </label>
          <input
            type="text"
            className="form-control"
            placeholder="ingrese el titulo que llevara el foro"
            name="titulo_foro"
            onChange={onFormUpdate}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del foro
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del foro"

            name="descripcion_foro"
            onChange={onFormUpdate}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Estado del foro</label>

          <select className="form-control" 
                  name="estado_foro" 
                  onChange={onFormUpdate} >
            <option disabled selected >Seleccione un estado</option>    
            <option value="0" >Activo</option>
            <option value="1" >Inactivo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del Ejemplo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del ejemplo"
            name="titulo_ejemplo"
            onChange={onFormUpdate}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese la descripción del ejemplo
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Escriba una descripcion del ejemplo subido"
            name="descripcion_ejemplo"
            onChange={onFormUpdate}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            Ingrese el codigo del ejemplo
          </label>
          <textarea 
              className="form-control" 
              rows="3"
              name="codigo_ejemplo"
              onChange={onFormUpdate}></textarea>
        </div>

        <br />

        <button className="btn btn-primary mb-3 me-5" onClick={onCreateContent}>
          Crear capítulo

        </button>
        <button  className="btn btn-danger mb-3" onClick={onReturn}>
          Regresar
        </button>
        <br />
      </form>
  );
};
