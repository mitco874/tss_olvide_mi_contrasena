export const del=async(url,body)=>{
    try {
        const rawResponse = await fetch(url, {
          method: "DELETE",
          headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"}
        });
    
        const res = await rawResponse.json();
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
      }

}