import { useState } from "react"

export default function Card({id,price,removetour,info,image,name}) {
    const [readmore,setreadmore]=useState(false);
    function readmorehandler(){
        setreadmore(!readmore)
    }
    const description= readmore?info: `${info.substring(0,200)}`
    return (
        <div className="card">
            <img src={image} className="image" />
            <h2>{price}</h2>
            <h2>{name}</h2>
            <div className="description-info"></div>
            <div className="">
                {description}
                <span className="text-blue-400 cursor-pointer"  onClick={readmorehandler}>&nbsp;{!readmore?'readmore':'showless'}</span>
            </div>
            
            <div className="bg-red-900 ml-[11rem] rounded-md text-white w-[30vw]">
            <button onClick={()=>removetour(id)}>Not Interested</button>
            </div>
            
        </div>
    )
}