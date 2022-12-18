import { NewContentForm } from "../../components"
import { useParams } from 'react-router-dom';
export const CreateContentPage = () => {
  const {id}=useParams();

  const initialFormState={
    titulo_capitulo:"",
    titulo_material:"",
    descripcion_material:"",
    enlace_material:"",
    titulo_foro:"",
    descrpcion_foro:"",
    forum_state:"",
    titulo_ejemplo:"",
    descripcion_ejemplo:"",
    codigo_ejemplo:""
  }

  const url=`142.93.203.113:3001/api/chapters`;
  
  const body={
    "titulo_capitulo":"capitulo 1 de nuevo" ,
    "titulo_material":"material nuevo" ,
    "descripcion_material": "descripcion de nuevo",
    "enlace_material": "nuevo enlace.pdf",
    "titulo_foro": "titulo foro nuevo",
    "descripcion_foro":"descripcion foro nuevo"  ,
    "estado_foro": 1,
    "titulo_ejemplo": "tittulo ejemplo nuevo",
    "descripcion_ejemplo": "descripcion ejemplo nuevo",
    "codigo_ejemplo": "public class nuevo",
    "id_clase": 16 
    }
  const onCreateContent=()=>{

  }

  const onCancel=()=>{


  }

  
  return (
    <div>
        <NewContentForm initialFormState={initialFormState} onCreateContent={onCreateContent} onCancel={onCancel}/>
    </div>
  )
}
