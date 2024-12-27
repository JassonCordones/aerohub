from fastapi import FastAPI

app = FastAPI(
    title="Notification Service",
    description="Sends booking confirmations, reminders, and alerts.",
    version="1.0.0",
)

# Mock data for notification status
notifications = {}

class Notification(BaseModel):
    flight_id: int
    customer_id: int
    message: str

@app.post("/notify/booking/{booking_id}",summary="Send a notification", tags=["Notifications"])
def send_booking_confirmation(booking_id: int, customer_email: str):
    # Sending confirmation logic
    notifications[booking_id] = {"status": "Sent", "email": customer_email, "type": "Booking Confirmation"}
    return {"message": f"Booking confirmation sent to {customer_email}"}

@app.post("/notify/reminder/{booking_id}")
def send_booking_reminder(booking_id: int, customer_email: str):
    # Sending reminder logic
    notifications[booking_id] = {"status": "Reminder Sent", "email": customer_email, "type": "Reminder"}
    return {"message": f"Reminder sent to {customer_email}"}

@app.post("/notify/alert/{booking_id}")
def send_alert(booking_id: int, customer_email: str, alert_message: str):
    # Sending alert logic
    notifications[booking_id] = {"status": "Alert Sent", "email": customer_email, "message": alert_message}
    return {"message": f"Alert sent to {customer_email}: {alert_message}"}
