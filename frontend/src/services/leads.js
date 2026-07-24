import api from "./api";

// Create a new lead
export const createLead = (payload) => api.post("/leads", payload);

// Fetch all leads, optionally filtered by a search term (name or email)
export const getLeads = (search = "") =>
  api.get("/leads", { params: search ? { search } : {} });

// Update a lead's status (or any field) by id
export const updateLead = (id, payload) => api.patch(`/leads/${id}`, payload);
