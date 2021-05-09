import React, { useState } from 'react'
import ProgreeBar from './ProgreeBar'

export default function UploadForm() {
    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)
    const types=['image/png','image/jpeg']
    const changeHandler=(e)=>{
    let selected=e.target.files[0]
    if(selected&&types.indexOf(selected.type)>=0){
        
        setFile(selected)
        setError(null)
    }else{
        setFile(null)
        setError('Please, select an image file (png, jpeg)')
    }
    }
    return (
        <form>
            <label >
                <input onChange={changeHandler} type="file" />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">
                    {error}
                </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgreeBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
