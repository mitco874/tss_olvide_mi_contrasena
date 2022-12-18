import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks"
import { post } from "../../helpers"
import AceEditor from "react-ace";
export const TaskResponses = () => {
    const idUsuario=localStorage.getItem("id_usuario");
    console.log(idUsuario)
    const [codeContent,setCodeContent]=useState("");
    const {id_tarea}=useParams()
    const navigate=useNavigate();
    const responseTaskFormStructure={enlace:"",mensaje: ""}

    const {form,onFormUpdate}=useForm(responseTaskFormStructure);

    const uploadResponse=async(e)=>{
        e.preventDefault();
        await post("http://142.93.203.113:3001/api/tasks/responses",{...form,
                                                                        codigo:codeContent,
                                                                        id_usuario:idUsuario,
                                                                        id_tarea:id_tarea
                                                                    })

        await navigate(-1)
    }

  return (
    <div className="mt-4">
        <h4>tarea id: {id_tarea}</h4>

        <br />    

        <div class="form-group">
            <label for="exampleFormControlTextarea1"> <b>enlace </b> </label>
            <input className="form-control w-50" name="enlace" onChange={onFormUpdate}/>
        </div>


    <label for="exampleFormControlTextarea1"> <b>Codigo</b> </label>
        <AceEditor mode={"Java"}
                style={{height:"20vh",border:"1px solid black"}}
                fontSize={14}
                value={codeContent}
                onChange={(content)=>{setCodeContent(content)}}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  }}
                editorProps={{ $blockScrolling: false }}
                />
                <br />
    

        <br />

        <br />
        <div class="form-group">
            <label for="exampleFormControlTextarea1"> <b>Ingresa un comentario</b> </label>
            <textarea className="form-control w-50" rows="3"   name="mensaje" onChange={onFormUpdate}></textarea>
        </div>


        <button className="btn btn-primary" onClick={(e)=>{uploadResponse(e)}}> Entregar tarea</button>
        
    </div>
  )
}
