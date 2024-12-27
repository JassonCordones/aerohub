import axios from "axios";

const NOTIFICATION_SERVICE_URL = "http://localhost:8005";

export const sendNotification = async (customerId, message) => {
    try {
        const response = await axios.post(`${NOTIFICATION_SERVICE_URL}/notifications`, { customerId, message });
        return response.data;
    } catch (error) {
        console.error("Error sending notification:", error);
        throw error;
    }
};

export const sendReminder = async (customerId, flightId) => {
    try {
        const response = await axios.post(`${NOTIFICATION_SERVICE_URL}/notifications/reminder`, { customerId, flightId });
        return response.data;
    } catch (error) {
        console.error("Error sending reminder:", error);
        throw error;
    }
};