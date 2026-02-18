import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust if needed
});

export const getPortfolioData = async () => {
  try {
    const response = await api.get("/portfolio");
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
  }
};
