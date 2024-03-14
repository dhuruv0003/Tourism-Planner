import Card from "./Card";
export default function Tours({ tours, removetour }) {
    return (
        <div className="container">
            <div className="title">
                <h3>Plan With Dhuruv</h3>
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