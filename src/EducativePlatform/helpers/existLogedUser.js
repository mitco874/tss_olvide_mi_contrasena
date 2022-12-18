export const existLogedUser=()=>{
    console.log(localStorage.getItem("id_usuario")!==null)
    return (localStorage.getItem("id_usuario")!==null )
}