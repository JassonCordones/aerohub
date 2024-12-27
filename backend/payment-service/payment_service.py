from fastapi import FastAPI
from typing import Dict

app = FastAPI()

# Mock data for payment status
payments = {}

@app.post("/payment/{booking_id}",tags=["Payments"])
def process_payment(booking_id: int, amount: float):
    """
    **Process a payment for a flight booking.**
    
    - **flight_id**: ID of the booked flight
    - **amount**: Amount to be paid
    """
    # Assume successful payment
    payments[booking_id] = {"status": "Paid", "amount": amount}
    return {"message": f"Payment of ${amount} processed for booking {booking_id}"}

@app.post("/refund/{booking_id}",tags=["Refunds"])
def process_refund(booking_id: int):
    if booking_id in payments:
        payments[booking_id]["status"] = "Refunded"
        return {"message": f"Refund processed for booking {booking_id}"}
    return {"error": "Booking not found"}
