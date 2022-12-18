import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks'

export const TasksPage = () => {
    const {id_capitulo}=useParams();
    const idRol=localStorage.getItem("id_rol")
    const {content}=useFetch(`http://142.93.203.113:3001/api/chapter/${id_capitulo}/tasks`,"GET");
    const {data,isLoading,hasError}=content;
    console.log(data)

  return (
    <div className='mt-4 d-flex flex-row flex-wrap'>
        { isLoading?<>cargando datos</> :
            data.map((item)=>
                <div class="card m-2 border"  style={{"width": "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Tarea</h5>
                        <p class="card-text">{item.descripcion}</p>
                        {idRol==="3" && <Link to={`${item.id}/revisar-entregas`} class="card-link">Revisar entregas</Link> }
                        <Link to={`${item.id}/entregar-tarea`} class="card-link">Entregar</Link>
                    </div>
                </div>
          )

        }









    </div>
  )
}
