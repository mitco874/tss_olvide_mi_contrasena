import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { post } from '../../helpers';

export const RegisterForm = () => {

  const {form,onFormUpdate,setForm}=useForm({nombre_completo:"",id_rol:2,email:"",password:""})


  const registerUser=async()=>{
    await post("http://142.93.203.113:3001/api/users",form);
  }

  return (
    <form className="mx-auto border border-dark rounded h-75 w-50 p-3">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nombre completo</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nombre Completo"
          name='nombre_completo'
          onChange={onFormUpdate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name='email'
          onChange={onFormUpdate}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Tipo de cuenta</label>
        <select className="form-control" id="exampleFormControlSelect1" name='id_rol' onChange={onFormUpdate}>
          <option value={2}>Estudiante</option>
          <option value={3}>Docente</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlPassword">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlPassword"
          placeholder="Contraseña"  
          name='password'
          onChange={onFormUpdate}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-dark mb-3" onClick={(e)=>{e.preventDefault(); registerUser();}}>
        Registrarse
      </button>
      <br />
      <span>
        ¿Ya tienes una cuenta? <Link to="/inicio-sesion">Iniciar sesion</Link>.
      </span>
    </form>
  );
};
