export const RunCodeBtn = ({code,className,onOutputChange}) => {
    const uploadCode= async ()=>{
    
      const headerContent={'Accept': 'application/json','Content-Type': 'application/json'}
    
      const bodyContent=JSON.stringify({className: className, code:code, extention:'java'});


      const petition = await fetch('http://142.93.203.113:3001/api/compiler', {
        method: 'POST',
        headers: headerContent,
        body: bodyContent
      });


      const response=await petition.json();
      console.log(response)
      onOutputChange(response.res)
    }
    
      return (
    <button className="btn btn-primary h-25" onClick={()=>{uploadCode()}}>Run Code</button>
      )
    }