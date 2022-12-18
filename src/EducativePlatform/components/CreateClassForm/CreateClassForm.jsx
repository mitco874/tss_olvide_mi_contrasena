import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks';
import { post } from '../../helpers';

export const CreateClassForm = () => {
  const initForm = { nombre_clase: ""};
  const navigate =useNavigate();

  const { form, onFormUpdate } = useForm(initForm);

  const createClass=async (e)=>{
  e.preventDefault();

  const localUser=localStorage.getItem("id_usuario");
  await post("http://142.93.203.113:3001/api/class/create",{...form,id_usuario:localUser})
  navigate("/clases")
  }


  return (
    <>
      <h3> Crear una nueva clase</h3>
      <form className="register-form border border-dark rounded  w-75 p-3 mx-auto">
        <div className="form-group mb-4">
          <label className="mb-1"> <b>Nombre de la clase:</b> </label>
          <input
            name="nombre_clase"
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={onFormUpdate}
          />
        </div>
        <button type="submit" className="btn btn-dark mx-auto d-block" onClick={createClass}>
          Crear clase
        </button>
      </form>
    </>
  )
}
