import { useCallback, useEffect, useState } from "react";
import { getLeads, updateLead } from "@/services/leads";

export function useLeads(search) {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeads = useCallback(async () => {
    console.log("fetchLeads called");

    setIsLoading(true);
    setError(null);

    try {
      const response = await getLeads(search);

      console.log("Response:", response);
      console.log("Data:", response.data);

      const list = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];

      console.log("List:", list);

      setLeads(list);
      console.log("State updated with:", list);
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message ||
          "Couldn't load leads. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  // ✅ This was missing
  useEffect(() => {
    const timeout = setTimeout(fetchLeads, 300);

    return () => clearTimeout(timeout);
  }, [fetchLeads]);

  const changeStatus = async (id, status) => {
    const previous = [...leads];

    setLeads((current) =>
      current.map((lead) =>
        lead._id === id ? { ...lead, status } : lead
      )
    );

    try {
      await updateLead(id, { status });
    } catch (err) {
      setLeads(previous);
      throw err;
    }
  };

  return {
    leads,
    isLoading,
    error,
    refetch: fetchLeads,
    changeStatus,
  };
}