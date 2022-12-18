import AceEditor from "react-ace";
import { OptionsSelector } from "../OptionSelector/OptionSelector";
import { RunCodeBtn } from "../../../EducativePlatform/components";

export const CodeEditor = ({language,code,className,onCodeChange,onOutputChange}) => {


  return (
    <div >
         <div className="row">
            <div className="col col-9 "><OptionsSelector defaultValue={language} /></div>
            <div className="col col-3 h-25 align-self-end" ><RunCodeBtn language={language} code={code} className={className} onOutputChange={onOutputChange}/></div>
        </div> 

      <AceEditor mode={language}
                
                name="UNIQUE_ID_OF_DIV"
                fontSize={14}
                value={code}
                onChange={onCodeChange}
                setOptions={{
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  }}
                editorProps={{ $blockScrolling: false }}
                />
    </div>
  )
}

CodeEditor.defaultProps={
  code:"",
  className:""
}