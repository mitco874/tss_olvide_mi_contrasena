import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks";
import { get, put } from "../../helpers";

export const UpdateContentPage = () => {

   const navigate=useNavigate();
   const {id_capitulo}=useParams();
   

   const [formData,setFormData]=useState({titulo_capitulo: "",
                                        titulo_material: "" ,
                                        descripcion_material:"",
                                        enlace_material:"",
                                        titulo_foro:"",
                                        descripcion_foro:"",
                                        estado_foro:"",
                                        titulo_ejemplo:"",
                                        descripcion_ejemplo:"",
                                        codigo_ejemplo:""})

    const {form,onFormUpdate,setForm}=useForm(formData);

   const getChapterContent=async()=>{
        const data=await get(`http://142.93.203.113:3001/api/chapters/${id_capitulo}`);
        console.log(data[0])
        setForm(data[0]);
        
    }


    const updateChapterContent=async(e)=>{
        e.preventDefault();
        console.log(form)
        await put(`http://142.93.203.113:3001/api/chapters/${id_capitulo}`,form);
        await navigate(-1);

    }

    useEffect(()=>{getChapterContent()},[])

    


  const onReturn=(e)=>{
    e.preventDefault();
    navigate(-1)
  }


  return (
      <form className="mx-auto border border-dark rounded h-75 w-50 p-3 mt-3">
      <h3>Crear capítulo</h3>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del capítulo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del capítulo"
            name="titulo_capitulo"
            value={form.titulo_capitulo}
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
              value={form.titulo_material}
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
            value={form.descripcion_material}
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
              value={form.enlace_material}
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
            value={form.titulo_foro}
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
            value={form.descripcion_foro}
            onChange={onFormUpdate}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Estado del foro</label>
          <select className="form-control" 
                  name="estado_foro" 
                  onChange={onFormUpdate}
                  value={form.estado_foro}
                  >
            <option disabled selected >Seleccione un estado</option>    
            <option value="0" >Inactivo</option>
            <option value="1" >Activo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Titulo del Ejemplo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el titulo del ejemplo"
            name="titulo_ejemplo"
            value={form.titulo_ejemplo}
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
            value={form.descripcion_ejemplo}
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
              value={form.codigo_ejemplo}
              onChange={onFormUpdate}></textarea>
        </div>

        <br />
        <button className="btn btn-primary mb-3 me-5" onClick={(e)=>{updateChapterContent(e)}}>
          Actualizar
        </button>
        <button  className="btn btn-danger mb-3" onClick={onReturn}>
          Regresar
        </button>
        <br />
      </form>
  );
  
}
