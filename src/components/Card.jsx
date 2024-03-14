import { useState } from "react"

export default function Card({ id, price, removetour, info, image, name }) {
    const [readmore, setreadmore] = useState(false);
    function readmorehandler() {
        setreadmore(!readmore)
    }
    const description = readmore ? info : `${info.substring(0, 200)}`
    return (

        <div className="flex-col h-[30rem] gap-2 ">
            <div className="h-[16rem]">
                <img src={image}  className="image h-[100%] w-[100%]" />
            </div>
            <div className="">
                <h2>{price}</h2>
            </div>
            <div className="m-2">
                <h2>{name}</h2>
            </div>
            <div className="m-4">
                {description}
                <span className="text-blue-400 cursor-pointer" onClick={readmorehandler}>&nbsp;{!readmore ? 'readmore' : 'showless'}</span>
            </div>

            <div className="bg-red-900 rounded-md  text-white ">
                <button className="" onClick={() => removetour(id)}>Not Interested</button>
            </div>

        </div>

    )
}