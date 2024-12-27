import { useParams } from "react-router-dom";
import { useState } from "react";
import { bookFlight } from "../api/flightService";

function BookingPage() {
    const { flightId } = useParams();
    const [seats, setSeats] = useState(1);
    const [error, setError] = useState(null);

    const handleBooking = async () => {
        try {
            await bookFlight(flightId, seats);
            alert("Flight booked successfully!");
        } catch (err) {
            setError("Booking failed. Try again.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Booking Flight {flightId}</h1>
            {error && <p className="text-red-500">{error}</p>}
            <label>
                Number of Seats:
                <input
                    type="number"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    className="border p-2 m-2"
                />
            </label>
            <button onClick={handleBooking} className="bg-blue-500 text-white p-2">Book</button>
        </div>
    );
}

export default BookingPage;
