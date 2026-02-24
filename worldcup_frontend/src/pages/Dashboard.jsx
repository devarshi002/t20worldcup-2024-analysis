import { useEffect, useState } from "react";
import StatsCards from "../components/StatsCards";
import Filters from "../components/Filters";
import MatchesTable from "../components/MatchesTable";
import ChartsSection from "../components/ChartsSection";
import PlayerLeaderboard from "../components/PlayerLeaderboard";
import MatchDetailsModal from "../components/MatchDetailsModal";
import {
  fetchMatches,
  fetchTeams,
  fetchVenues,
  fetchWinners,
} from "../services/api";

export default function Dashboard() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  const [stats, setStats] = useState({
    totalMatches: 0,
    totalTeams: 0,
    totalVenues: 0,
    totalWinners: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (filterParams = {}) => {
    try {
      console.log("Calling API with filters:", filterParams);
      setLoading(true);

      const [matchesRes, teamsRes, venuesRes, winnersRes] = await Promise.all([
        fetchMatches(filterParams),
        fetchTeams(),
        fetchVenues(),
        fetchWinners(),
      ]);

      console.log("Filtered Matches:", matchesRes.data);

      setMatches(matchesRes.data || []);

      setStats({
        totalMatches: matchesRes.data?.length || 0,
        totalTeams: (teamsRes.data?.teams || teamsRes.data || []).length,
        totalVenues: venuesRes.data?.length || 0,
        totalWinners: winnersRes.data?.length || 0,
      });
    } catch (error) {
      console.error("Error loading dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (filterValues) => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(filterValues).filter(([_, value]) => value !== "")
    );

    setActiveFilters(cleanedFilters);
    loadData(cleanedFilters);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        🏏 World Cup Analytics Dashboard
      </h1>

      {/* Active Filters Display */}
      {Object.keys(activeFilters).length > 0 && (
        <div className="mb-4 text-sm text-blue-600">
          Active Filters:{" "}
          {Object.entries(activeFilters)
            .map(([k, v]) => `${k}: ${v}`)
            .join(" | ")}
        </div>
      )}

      <Filters onFilter={handleFilter} />
      <StatsCards stats={stats} />

      {/* Loading / Empty / Content */}
      {loading ? (
        <div className="text-center py-10 text-lg font-semibold">
          Loading data...
        </div>
      ) : matches.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No matches found for selected filters
        </div>
      ) : (
        <>
          <div className="mt-4 mb-2 text-sm text-gray-600">
            Showing {matches.length} filtered matches
          </div>

          <MatchesTable
            matches={matches}
            onSelectMatch={setSelectedMatch}
          />
          <ChartsSection matches={matches} />
          <PlayerLeaderboard matches={matches} />
        </>
      )}

      {/* Match Details Modal */}
      {selectedMatch && (
        <MatchDetailsModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}