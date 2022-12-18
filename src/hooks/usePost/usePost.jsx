import { useState } from "react";

export const usePost = (url="",body={}) => {
    const [content, setContent] = useState({
        data: {},
        isLoading: true,
        hasError: false,
      });
    
      const postData= async()=>{
        if(url===""){ setContent({ data: {}, isLoading: false, hasError: false }); return;}

        setContent({ ...content, isLoading: true, hasError: false });

        const rawResponse = await fetch(url, {
            method: "POST",
            headers: {"Accept": "application/json","Content-Type": "application/json"},
            body: JSON.stringify(body),
          });
        
        const res = await rawResponse.json();

        setContent({ data: res, isLoading: false, hasError: false });

      return { content,postData };
}

}