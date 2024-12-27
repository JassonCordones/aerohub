import axios from "axios";

const PAYMENT_SERVICE_URL = "http://localhost:8003";

export const makePayment = async (bookingId, amount) => {
    try {
        const response = await axios.post(`${PAYMENT_SERVICE_URL}/payments`, { bookingId, amount });
        return response.data;
    } catch (error) {
        console.error("Error making payment:", error);
        throw error;
    }
};

export const refundPayment = async (paymentId) => {
    try {
        const response = await axios.post(`${PAYMENT_SERVICE_URL}/payments/refund`, { paymentId });
        return response.data;
    } catch (error) {
        console.error("Error processing refund:", error);
        throw error;
    }
};
