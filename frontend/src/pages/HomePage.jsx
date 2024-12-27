import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFlights } from "../api/flightService";

function HomePage() {
    const [query, setQuery] = useState({ origin: "", destination: "", date: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const searchFlights = async () => {
        try {
            const flights = await getFlights(query);
            navigate("/search", { state: { flights } });
        } catch (err) {
            setError("Failed to fetch flights. Try again.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Search Flights</h1>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Origin"
                onChange={(e) => setQuery({ ...query, origin: e.target.value })}
                className="border p-2 m-2"
            />
            <input
                type="text"
                placeholder="Destination"
                onChange={(e) => setQuery({ ...query, destination: e.target.value })}
                className="border p-2 m-2"
            />
            <input
                type="date"
                onChange={(e) => setQuery({ ...query, date: e.target.value })}
                className="border p-2 m-2"
            />
            <button onClick={searchFlights} className="bg-blue-500 text-white p-2">Search</button>
        </div>
    );
}

export default HomePage;