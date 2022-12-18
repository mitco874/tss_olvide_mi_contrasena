import {
  useEffect,
  useState,
} from 'react';

export const useFetch = (url="",method,body={}) => {
    const [content, setContent] = useState({
        data: {},
        isLoading: true,
        hasError: false,
      });
    
      useEffect(() => {
        fetchData();
      }, [url]);

      const fetchData= async()=>{
        if(url===""){
            setContent({ data: {}, isLoading: false, hasError: false });
            return
          }

        setContent({ ...content, isLoading: true, hasError: false });

        let rawResponse; 
        
        if(method==="GET"){
          console.log(url)
          rawResponse=await fetch(url);
          
        }
        else{
           rawResponse = await fetch(url, {
            method: method,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
        }

        const res = await rawResponse.json();

        if(method==="POST"){        
        localStorage.setItem("id_usuario",res.data.id_usuario)
        localStorage.setItem("nombre_completo",res.data.nombre_completo)
        localStorage.setItem("id_rol",res.data.id_rol)
        localStorage.setItem("email",res.data.email)
        localStorage.setItem("token",res.token)}


        setContent({ data: res, isLoading: false, hasError: false });
      }


      return { content,fetchData };
}

