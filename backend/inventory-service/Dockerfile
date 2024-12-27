# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install FastAPI and Uvicorn
RUN pip install --no-cache-dir fastapi uvicorn

# Make port 8002 available to the world outside this container
EXPOSE 8002

# Define the command to run the app using uvicorn
CMD ["uvicorn", "inventory_service:app", "--host", "0.0.0.0", "--port", "8002"]
