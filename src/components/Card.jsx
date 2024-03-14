import { useState } from "react"

export default function Card({ id, price, removetour, info, image, name }) {
    const [readmore, setreadmore] = useState(false);
    function readmorehandler() {
        setreadmore(!readmore)
    }
    const description = readmore ? info : `${info.substring(0, 200)}`
    return (

        <div className="card">

            <img src={image} className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h2 className="tour-price">{price}</h2>
                    <h2 className="tour-name">{name}</h2>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmorehandler}>&nbsp;{!readmore ? 'readmore' : 'showless'}</span>
                </div>
            </div>
            <div className="btn-red">
                <button className="" onClick={() => removetour(id)}>Not Interested</button>
            </div>

        </div>

    )
}