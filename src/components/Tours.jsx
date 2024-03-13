import Card from "./Card";
export default function Tours(props) {
    return (
        <div className="">
            <div className="">
                <h1>Tours Planning by Dhuruv</h1>
            </div>
            <div className="">
                {
                    props.tours.map((tour)=>{
                        return <Card {...tour }></Card>
                    })
                }
            </div>
        </div>
    );
}