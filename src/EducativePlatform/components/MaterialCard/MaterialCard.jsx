import { Link } from 'react-router-dom';

export const MaterialCard = ({data}) => {
    const {enlace_material,id_archivo,nombre_archivo}=data;
  return (
    <div className="card my-3 w-75" >
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{nombre_archivo}</h6>
      <Link className="card-link" to={`view/${id_archivo}`}>Enlace al recurso.</Link>    </div>
  </div>
  )
}






