// src/services/api.js

// Replace with your actual backend URL
const API_URL = "http://localhost:5000"; // Or the deployed backend URL

// Function to fetch all application statuses (GET request)
export const fetchApplicationStatuses = async () => {
  try {
    const response = await fetch(`${API_URL}/api/application-status`);
    if (!response.ok) {
      throw new Error("Failed to fetch application statuses");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching application statuses:", error);
    throw error;
  }
};

// Function to fetch interview schedules (GET request)
export const fetchInterviewSchedules = async () => {
  try {
    const response = await fetch(`${API_URL}/api/interview-schedules`);
    if (!response.ok) {
      throw new Error("Failed to fetch interview schedules");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching interview schedules:", error);
    throw error;
  }
};

// Function to update application status (PUT request)
export const updateApplicationStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_URL}/api/application-status/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error("Failed to update application status");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating application status with ID ${id}:`, error);
    throw error;
  }
};


