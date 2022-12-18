import { useEffect } from "react";
import { useState } from "react"
import { get } from "../../helpers";

export const MyResponsesPage = () => {

    const [myResponses,setMyResponses]=useState([]);

    const idUsuario=localStorage.getItem("id_usuario");

    const loadMyResponses=async()=>{
        const res=await get(`http://142.93.203.113:3001/api/tasks/responses/user/${idUsuario}`)
        setMyResponses(res);}

    
    useEffect(()=>{loadMyResponses()},[])

  return (
    <div className="mt-4">
        {myResponses.map((response)=>(
                                    <div class="card m-2 border"  style={{"width": "18rem"}}>
                                    <div class="card-body">
                                        <h5 class="card-title">Tarea para el capitulo: "{response.titulo_capitulo}"</h5>
                                        {response.nota===null ?<><p>revisando...</p><img height="300px" width="250px" src="https://4.bp.blogspot.com/-LPL4F9mwuxg/Vy0JnsRCrnI/AAAAAAAAA24/l5t3INwD-0YK228GaHi4pVZOzVq3DsnTwCLcB/s1600/relog-de-arena.gif" alt="esperando revision"/></>  :<p class="card-text"><b>Nota:</b> {response.nota} </p>}
                                        
                                    </div>
                                </div>
                            )
        )}
    </div>
  )
}
