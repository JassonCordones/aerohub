from fastapi import FastAPI
from typing import Dict

app = FastAPI(
    title="Inventory Service",
    description="Manages seat availability and pricing.",
    version="1.0.0",
)

# Mock data for seat availability and pricing
inventory = {
    "Flight A": {"seats": 100, "price": 250},
    "Flight B": {"seats": 150, "price": 300}
}

@app.get("/inventory/{flight_name}")
def get_inventory(flight_name: str):
    """
    **Get the current inventory for all flights.**
    
    Returns seat availability and pricing.
    """
    flight_inventory = inventory.get(flight_name)
    if flight_inventory:
        return flight_inventory
    return {"error": "Flight not found"}

@app.put("/inventory/{flight_name}")
def update_inventory(flight_name: str, seats: int, price: float):
    if flight_name in inventory:
        inventory[flight_name]["seats"] = seats
        inventory[flight_name]["price"] = price
        return {"message": f"Updated inventory for {flight_name}"}
    return {"error": "Flight not found"}
