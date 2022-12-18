import { useState } from "react";

export const useLogin = (url="",body={}) => {
    const [content, setContent] = useState({
        data: {},
        isLoading: true,
        hasError: false,
      });
    
      const fetchData= async()=>{
        if(url===""){
            setContent({ data: {}, isLoading: false, hasError: false });
            return}

        setContent({ ...content, isLoading: true, hasError: false });

        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"},
            body: JSON.stringify(body),
          });
        
        const res = await rawResponse.json();

        localStorage.setItem("id_usuario",res.data.id_usuario)
        localStorage.setItem("nombre_completo",res.data.nombre_completo)
        localStorage.setItem("id_rol",res.data.id_rol)
        localStorage.setItem("email",res.data.email)
        localStorage.setItem("token",res.token)

        setContent({ data: res, isLoading: false, hasError: false });

      }

      return { content,fetchData };
}

