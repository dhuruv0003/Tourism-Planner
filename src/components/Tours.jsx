import Card from "./Card";
export default function Tours({ tours, removetour }) {
    return (
        <div className="container">
            <div className="title">
                <h3>Plan With Dhuruv</h3>
            </div>
            <div className="cards">
                {
                    //error=>Each child in a list should have a unique "key" prop.

                    //whenever we use map function always use key function that coonsists of unique element from the array or object
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removetour={removetour}></Card>
                    })
                }
            </div>
        </div>
    );
} 