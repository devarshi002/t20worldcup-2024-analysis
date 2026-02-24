import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const fetchMatches = (params) => API.get("/matches", { params });
export const fetchTeams = () => API.get("/teams");
export const fetchVenues = () => API.get("/venues");
export const fetchStages = () => API.get("/stages");
export const fetchWinners = () => API.get("/winners");
export const fetchPlayers = () => API.get("/players");