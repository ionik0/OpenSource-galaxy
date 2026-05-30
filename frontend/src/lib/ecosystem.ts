import axios from "axios";

const API_BASE = "http://localhost:8080";

export const fetchEcosystem = async (name: string) => {
    const res = await axios.get(`${API_BASE}/ecosystem/${name}`);
    return res.data;
};