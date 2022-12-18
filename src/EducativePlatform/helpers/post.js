
export const post=async(url,body)=>{
  console.log(JSON.stringify(body));
    try {
        const rawResponse = await         
        fetch(url,
        {

            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        
        const res = await rawResponse.json();
       
        return res;
      } catch (error) {
        console.error(error);
      }

}

