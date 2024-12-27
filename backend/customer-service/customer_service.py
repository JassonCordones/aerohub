from fastapi import FastAPI
from typing import Dict

app = FastAPI(
    title="Customer Service",
    description="Handles customer profiles and loyalty programs.",
    version="1.0.0",
)

# Mock data for customer profiles
customers = {
    1: {"name": "John Doe", "email": "john@example.com", "loyalty_points": 1200},
    2: {"name": "Jane Smith", "email": "jane@example.com", "loyalty_points": 800}
}


@app.get("/customers", summary="View all customers", tags=["Customers"])
def get_customers():
    """
    **Retrieve all customers and their loyalty points.**
    """
    return customers

@app.get("/customer/{customer_id}")
def get_customer(customer_id: int):
    customer = customers.get(customer_id)
    if customer:
        return customer
    return {"error": "Customer not found"}

@app.put("/customer/{customer_id}/add-loyalty")
def add_loyalty_points(customer_id: int, points: int):
    if customer_id in customers:
        customers[customer_id]["loyalty_points"] += points
        return {"message": f"Added {points} loyalty points to customer {customer_id}"}
    return {"error": "Customer not found"}
