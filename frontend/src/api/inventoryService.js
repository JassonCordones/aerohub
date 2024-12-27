import axios from "axios";

const INVENTORY_SERVICE_URL = "http://localhost:8002";

export const getSeatAvailability = async (flightId) => {
    try {
        const response = await axios.get(`${INVENTORY_SERVICE_URL}/inventory/seats/${flightId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching seat availability:", error);
        throw error;
    }
};

export const updateSeatPricing = async (flightId, price) => {
    try {
        const response = await axios.put(`${INVENTORY_SERVICE_URL}/inventory/price/${flightId}`, { price });
        return response.data;
    } catch (error) {
        console.error("Error updating seat pricing:", error);
        throw error;
    }
};