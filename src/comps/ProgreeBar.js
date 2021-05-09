import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
export default function ProgreeBar({file,setFile}) {
    const {url,error,progress}=useStorage(file)
  
    useEffect(()=>{
    url&&setFile(null)

    },[url,file])

    return (
        <div className="progress-bar" style={{width:progress+'%'}}>
       
        </div>
    )
}
