# backend/flight_service.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List


app = FastAPI(    
    title="AeroHub API",
    description="APIs for managing flights, bookings, and inventory for AeroHub Airlines.",
    version="1.0.0",
    contact={
        "name": "Jasson",
        "url": "https://github.com/jassoncordones",
        "email": "jasson.cordones@hotmail.com"
    },
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT"
    }
)

# Dummy data
flights = [
    {"id": 1, "name": "Flight A", "from_city": "NY", "to_city": "LA", "available_seats": 100},
    {"id": 2, "name": "Flight B", "from_city": "SF", "to_city": "Chicago", "available_seats": 150}
]

class Flight(BaseModel):
    id: int
    name: str
    from_city: str
    to_city: str
    available_seats: int

@app.get("/", response_model=List[Flight],tags=["Flights"])
@app.get("/flights", response_model=List[Flight],tags=["Flights"])
def get_flights():
    """
    Retrieve all available flights with details like:
    - Flight name
    - Origin and destination cities
    - Available seats
    """
    return flights

@app.post("/flights/book",tags=["Bookings"])
def book_flight(flight_id: int, seats: int):
    """
    Book seats for a specific flight.
    
    - **flight_id**: ID of the flight
    - **seats**: Number of seats to book
    """
    flight = next((f for f in flights if f['id'] == flight_id), None)
    if flight and flight['available_seats'] >= seats:
        flight['available_seats'] -= seats
        return {"message": f"Successfully booked {seats} seats on {flight['name']}"}
    else:
        return {"error": "Not enough seats available"}