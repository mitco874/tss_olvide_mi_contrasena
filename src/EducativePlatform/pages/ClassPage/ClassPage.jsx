import { useFetch } from "../../../hooks/"
import { ClassCard, CreateClassBtn, JoinClassBtn } from "../../components"

export const ClassPage = () => {
  const user_id=localStorage.getItem("id_usuario");
  const user_rol=localStorage.getItem("id_rol");


  const { content,fetchData}=useFetch(`http://142.93.203.113:3001/api/users/${user_id}/class`,"GET")
  const {data,isLoading}=content;
  console.log(data)

  return (
    <div className="mt-3">
      {isLoading? <>Cargando clases...</>: 
      <>

      <h3>Clases habillitadas:</h3>
      <div className="mt-3 d-flex justify-content-around flex-wrap">
        {data.map((clase)=> {if(clase.archivado===0){
            return(<ClassCard key={clase.id_clase} title={clase.nombre_clase} id={clase.id_clase} archivado={false} reload={fetchData} />)
            }})}
            {user_rol==="3"?<CreateClassBtn/> : <JoinClassBtn/>}
      </div>
      <hr />

      <h3>Clases archivadas:</h3>
      <div className="mt-3 d-flex justify-content-around flex-wrap">
      {data.map((clase)=> {if(clase.archivado===1){
        return(<ClassCard key={clase.id_clase} title={clase.nombre_clase} id={clase.id_clase}  archivado={true} reload={fetchData}/>);
        }
      })}
</div>


      </> }

      
    </div>
  )
  
}