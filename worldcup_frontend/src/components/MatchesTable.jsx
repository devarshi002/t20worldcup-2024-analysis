import { useState, useMemo } from "react";
import { teamLogos } from "../utils/teamLogos";

export default function MatchesTable({ matches, onSelectMatch }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  // 🔍 Filter matches based on search
  const filteredMatches = useMemo(() => {
    return matches.filter((m) => {
      const text = `${m["1st Team"]} ${m["2nd Team"]} ${m["Venue"]} ${m["Winners"]} ${m["Player Of The Match"]}`.toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [matches, search]);

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredMatches.length / rowsPerPage);

  const paginatedMatches = filteredMatches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl rounded-2xl p-4 mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <h2 className="text-2xl font-bold text-blue-400 text-center md:text-left">
          Match Details
        </h2>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search team, venue, player..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-200">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="p-3">Match No</th>
              <th className="p-3">Teams</th>
              <th className="p-3">Venue</th>
              <th className="p-3">Stage</th>
              <th className="p-3">Winner</th>
              <th className="p-3">Player of the Match</th>
            </tr>
          </thead>

          <tbody>
            {paginatedMatches.map((match, index) => {
              const team1 = match["1st Team"];
              const team2 = match["2nd Team"];
              const winner = match["Winners"];

              return (
                <tr
                  key={index}
                  onClick={() => onSelectMatch(match)}
                  className="text-center border-b border-gray-800 hover:bg-gray-800/60 cursor-pointer transition"
                >
                  {/* Match No */}
                  <td className="p-3">{match["Match No."]}</td>

                  {/* Teams with Logos */}
                  <td className="p-3 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      {teamLogos[team1] && (
                        <img
                          src={teamLogos[team1]}
                          alt={team1}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span>{team1}</span>

                      <span className="text-gray-400 mx-1">vs</span>

                      {teamLogos[team2] && (
                        <img
                          src={teamLogos[team2]}
                          alt={team2}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span>{team2}</span>
                    </div>
                  </td>

                  {/* Venue */}
                  <td className="p-3 text-gray-400">{match["Venue"]}</td>

                  {/* Stage */}
                  <td className="p-3 text-purple-400 font-medium">
                    {match["Stage"]}
                  </td>

                  {/* Winner */}
                  <td className="p-3 font-bold text-green-400">
                    <div className="flex items-center justify-center gap-2">
                      {teamLogos[winner] && (
                        <img
                          src={teamLogos[winner]}
                          alt={winner}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span>{winner}</span>
                    </div>
                  </td>

                  {/* Player */}
                  <td className="p-3 text-yellow-400">
                    {match["Player Of The Match"]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 📄 Pagination Controls */}
      <div className="flex justify-between items-center mt-4 text-gray-300">
        <p>
          Showing {(currentPage - 1) * rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, filteredMatches.length)} of{" "}
          {filteredMatches.length} matches
        </p>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
          >
            Prev
          </button>

          <span className="px-3 py-1 bg-blue-600 rounded">
            {currentPage}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}