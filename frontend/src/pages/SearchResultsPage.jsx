import { useLocation, Link } from "react-router-dom";

function SearchResultsPage() {
    const location = useLocation();
    const { flights } = location.state;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Flight Results</h1>
            {flights.map(flight => (
                <div key={flight.id} className="border p-4 my-2">
                    <p>{flight.name}</p>
                    <p>${flight.price}</p>
                    <Link to={`/booking/${flight.id}`} className="text-blue-500">Book Now</Link>
                </div>
            ))}
        </div>
    );
}

export default SearchResultsPage;
