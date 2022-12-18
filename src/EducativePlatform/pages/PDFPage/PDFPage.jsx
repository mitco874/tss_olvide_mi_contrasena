import {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import { get } from '../../helpers';

export const PDFPage = () => {

    const{id_capitulo,id_file}=useParams()
    const url=`http://142.93.203.113:3001/api/chapters/${id_capitulo}/material`

    const [fileData,setFileData]=useState({contenido:"",enlace_material:"",id_archivo:0,nombre_archivo:"",tipo:0})

    const getMaterial=async()=>{
        const data =await get(url);
        const material=data.material.find((item)=>item.id_archivo==id_file)
        console.log(material)
        setFileData(material)
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        getMaterial()},[])
        return (
            <div>
                <h3>{fileData.nombre_archivo}</h3>
                <iframe
                src={fileData.enlace_material}
                width="100%"
                height="700vh"
                id="cap1"
                title="intro"
              ></iframe>
                </div>
          )
        }