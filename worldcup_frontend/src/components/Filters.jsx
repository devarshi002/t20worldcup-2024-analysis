import { useEffect, useState } from "react";
import { fetchTeams, fetchVenues, fetchStages } from "../services/api";

export default function Filters({ onFilter }) {
  const [teams, setTeams] = useState([]);
  const [venues, setVenues] = useState([]);
  const [stages, setStages] = useState([]);

  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedStage, setSelectedStage] = useState("");

  useEffect(() => {
    loadFilters();
  }, []);

  const loadFilters = async () => {
    try {
      const teamsRes = await fetchTeams();
      const venuesRes = await fetchVenues();
      const stagesRes = await fetchStages();

      setTeams(teamsRes.data.teams || []);
      setVenues(venuesRes.data || []);
      setStages(stagesRes.data || []);
    } catch (error) {
      console.error("Error loading filters:", error);
    }
  };

  const applyFilters = () => {
    onFilter({
      team: selectedTeam,
      venue: selectedVenue,
      stage: selectedStage,
    });
  };

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl rounded-2xl p-4 mb-6">
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Team Dropdown */}
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">All Teams</option>
          {teams.map((team, idx) => (
            <option key={idx} value={team}>
              {team}
            </option>
          ))}
        </select>

        {/* Venue Dropdown */}
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          value={selectedVenue}
          onChange={(e) => setSelectedVenue(e.target.value)}
        >
          <option value="">All Venues</option>
          {venues.map((venue, idx) => (
            <option key={idx} value={venue}>
              {venue}
            </option>
          ))}
        </select>

        {/* Stage Dropdown */}
        <select
          className="bg-gray-800 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
        >
          <option value="">All Stages</option>
          {stages.map((stage, idx) => (
            <option key={idx} value={stage}>
              {stage}
            </option>
          ))}
        </select>

        {/* Apply Filters Button */}
        <button
          onClick={applyFilters}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg p-3 font-semibold shadow-lg transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}