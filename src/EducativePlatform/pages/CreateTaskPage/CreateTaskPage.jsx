import {  useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks";
import { post } from "../../helpers";

export const CreateTaskPage = () => {
    const {id_capitulo}=useParams();
    const navigate=useNavigate();
    const createTaskFormStructure={descripcion:""};
    const {form,onFormUpdate}=useForm(createTaskFormStructure);

    const uploadTask=async(e)=>{
        e.preventDefault();
        await post(`http://142.93.203.113:3001/api/chapter/${id_capitulo}/tasks`,form);
        navigate(-1)
    }

  return (
<>
    <h3>Publicar tarea</h3>

    <form>
        <div className="input-group">
        <textarea className="form-control" 
                  aria-label="With textarea"
                  name="descripcion"
                  placeholder="Ingrese la descripcion"
                  onChange={onFormUpdate}
                  style={{height:"30vh",with:"30vh"}}
                  ></textarea>
        </div>
            <br />
        <button className="btn btn-primary" onClick={uploadTask}>Crear tarea</button>
    </form >
    </>
  )
}
