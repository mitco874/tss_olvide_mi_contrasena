import { useNavigate } from "react-router-dom"

export const LogoutBtn = () => {
    const navigate=useNavigate()
    const removeLocalStorageData=()=>{
        localStorage.removeItem("id_usuario")
        localStorage.removeItem("nombre_completo")
        localStorage.removeItem("id_rol")
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        navigate("/")
    }

  return (
    <button onClick={removeLocalStorageData}>Cerrar sesión</button>
  )
}
