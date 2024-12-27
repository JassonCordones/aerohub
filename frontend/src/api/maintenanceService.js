import axios from "axios";

const MAINTENANCE_SERVICE_URL = "http://localhost:8004";

export const getAircraftHealth = async (aircraftId) => {
    try {
        const response = await axios.get(`${MAINTENANCE_SERVICE_URL}/maintenance/health/${aircraftId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching aircraft health:", error);
        throw error;
    }
};

export const scheduleMaintenance = async (aircraftId, date) => {
    try {
        const response = await axios.post(`${MAINTENANCE_SERVICE_URL}/maintenance/schedule`, { aircraftId, date });
        return response.data;
    } catch (error) {
        console.error("Error scheduling maintenance:", error);
        throw error;
    }
};
