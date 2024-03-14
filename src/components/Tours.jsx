import Card from "./Card";
export default function Tours({ tours, removetour }) {
    return (
        <div className="">
            <div className="">
                <h1>Tours Planning by Dhuruv</h1>
            </div>
            <div className="grid grid-cols-3 gap-4  p-[1rem]">
                {
                    tours.map((tour) => {
                        return <Card {...tour} removetour={removetour}></Card>
                    })
                }
            </div>
        </div>
    );
} 