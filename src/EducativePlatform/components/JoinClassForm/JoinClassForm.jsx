import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks";
import {get, post } from "../../helpers";

export const JoinClassForm = () => {

  const initForm = {id_clase:""};

  const navigate = useNavigate();

  const { form, onFormUpdate } = useForm(initForm);

  const [warning,setWarning]=useState("");
  const joinClass = async (e) => {
    e.preventDefault();
    const localUser = localStorage.getItem("id_usuario");

    const data=await get(`http://142.93.203.113:3001/api/class/${form.id_clase}`)
    console.log(data)
    if(data.archivado===0){
      await post("http://142.93.203.113:3001/api/class/register", {...form, id_usuario: localUser })
      navigate("/clases")
    }
    else{
    setWarning("la clase se encuetra archivada")
    }
  }


  return (
    <>
    <div className="mt-3" style={{"backgroundColor":"#DC143C","color":"white","borderRadius":": 25px", "textAlign":"center" }} >{warning}</div>
    <h3>Unirse a una clase</h3>
    <form className="register-form border border-dark rounded w-75 p-3 mx-auto">
    <div className="form-group mb-4">
      <label className="mb-1"> <b>Ingresa el codigo de la clase:</b> </label>
      <input
        name="id_clase"
        type="text"
        className="form-control"
        placeholder="codigo"
        onChange={onFormUpdate}
      />
    </div>
    <button type="submit" className="btn btn-dark mx-auto d-block" onClick={joinClass} >
      unirse
    </button>
  </form>
    </>
  )
}