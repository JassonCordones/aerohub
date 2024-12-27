import axios from "axios";

const FLIGHT_SERVICE_URL = "http://localhost:8001";

export const getFlights = async () => {
    try {
        const response = await axios.get(`${FLIGHT_SERVICE_URL}/flights`);
        return response.data;
    } catch (error) {
        console.error("Error fetching flights:", error);
        throw error;
    }
};

export const bookFlight = async (flightId, seats) => {
    try {
        const response = await axios.post(`${FLIGHT_SERVICE_URL}/flights/book`, { flightId, seats });
        return response.data;
    } catch (error) {
        console.error("Error booking flight:", error);
        throw error;
    }
};
