import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../helpers";

export const RegisteredStudentsPage = () => {
    const [students,setStudents]=useState([]);
    const {id}=useParams();
    console.log(id)
    const getStudents=async()=>{
        const data= await get(`http://142.93.203.113:3001/api/class/${id}/users`);
        setStudents(data);
    }

    useEffect(()=>{getStudents()},[])
    

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre completo</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        {
            students.map((student)=>(
                <tr key={student.id_usuario}>
                    <td>{student.id_usuario}</td>
                    <td>{student.nombre_completo}</td>
                    <td>{student.email}</td>
              </tr>
            ))

        }

        </tbody>
      </table>



    </>
  );
};
