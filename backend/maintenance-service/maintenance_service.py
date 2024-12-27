from fastapi import FastAPI
from typing import Dict

app = FastAPI(
    title="Predictive Maintenance Service",
    description="Monitors aircraft health using IoT data and predicts maintenance needs.",
    version="1.0.0",
)

# Mock data for IoT sensors and maintenance predictions
maintenance_data = {
    1: {"health_score": 85, "next_maintenance_due_in_days": 30},
    2: {"health_score": 95, "next_maintenance_due_in_days": 60},
    3: {"health_score": 85, "next_maintenance_due_in_days": 30},
}

@app.get("/")
def get_aircraft_health():
    return maintenance_data

@app.get("/maintenance")
def get_aircraft_health():
    return maintenance_data


@app.get(f"/maintenance/{aircraft_id}")
def get_aircraft_health(aircraft_id: str):
    health_data = maintenance_data.get(aircraft_id)
    if health_data:
        return health_data
    return {"error": "Aircraft not found"}

@app.put("/maintenance/{aircraft_id}")
def update_aircraft_health(aircraft_id: str, health_score: int, days_until_maintenance: int):
    if aircraft_id in maintenance_data:
        maintenance_data[aircraft_id] = {"health_score": health_score, "next_maintenance_due_in_days": days_until_maintenance}
        return {"message": f"Updated health data for {aircraft_id}"}
    return {"error": "Aircraft not found"}
