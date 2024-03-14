import Card from "./Card";
export default function Tours({ tours, removetour }) {
    return (
        <div className="container">
            <div className="title">
                <h1>Tours Planning by Dhuruv</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card {...tour} removetour={removetour}></Card>
                    })
                }
            </div>
        </div>
    );
} 