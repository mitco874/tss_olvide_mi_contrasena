import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { CodeEditor, ConsoleOutput } from "../../../UI";

export const CodeEditorPage = () => {
  const { id_ejemplo } = useParams();
  const { content } = useFetch(`http://142.93.203.113:3001/api/practice/${id_ejemplo}`,"GET");
  const { data, isLoading } = content;
  const { id, titulo_practica, contenido,descripcion_practica} = data[0] || {};
  const defaultLanguage='java';
  
  const [programCode,setProgramCode]=useState(contenido);
  const [output,setOutput]=useState("|");
useEffect(()=>{setProgramCode(contenido)},[contenido])

  const onCodeChange=(newValue)=>{
    setProgramCode(newValue)}


  return (
      isLoading ? (
        <>cargando practica...</>
      ) : (
        <div style={{ height: "90vh", width: "150vh"}} className="mx-5">
          <h2 className="text-center" style={{ width: "100vh" }}>{titulo_practica}</h2>
          <section  style={{ height: "90vh", width: "100vh" }}>
            <div className="row">
              <div className="col-7">
                <p>{descripcion_practica}</p>
                <hr/>
                <div><ConsoleOutput outputText={output}/></div>
              </div>
              <div className="col-3 ms-5">
                <CodeEditor language={defaultLanguage} code={programCode} className={titulo_practica} onCodeChange={onCodeChange} onOutputChange={setOutput}/>
              </div>
            </div>
            
          </section>

        </div>
      )

  );
};
