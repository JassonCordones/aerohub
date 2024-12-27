import axios from "axios";

const CUSTOMER_SERVICE_URL = "http://localhost:8003";

export const getCustomerProfile = async (customerId) => {
    try {
        const response = await axios.get(`${CUSTOMER_SERVICE_URL}/customers/${customerId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching customer profile:", error);
        throw error;
    }
};

export const updateLoyaltyPoints = async (customerId, points) => {
    try {
        const response = await axios.put(`${CUSTOMER_SERVICE_URL}/customers/loyalty/${customerId}`, { points });
        return response.data;
    } catch (error) {
        console.error("Error updating loyalty points:", error);
        throw error;
    }
};