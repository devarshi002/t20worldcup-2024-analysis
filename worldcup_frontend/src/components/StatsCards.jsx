import CountUp from "react-countup";

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      
      {/* Total Matches */}
      <div className="bg-gradient-to-br from-blue-900/40 to-gray-900/80 border border-blue-500/20 shadow-lg rounded-2xl p-4 hover:scale-105 transition duration-300">
        <h2 className="text-gray-400">Total Matches</h2>
        <p className="text-3xl font-extrabold text-blue-400">
          <CountUp end={stats.totalMatches} duration={1.5} />
        </p>
      </div>

      {/* Total Teams */}
      <div className="bg-gradient-to-br from-green-900/40 to-gray-900/80 border border-green-500/20 shadow-lg rounded-2xl p-4 hover:scale-105 transition duration-300">
        <h2 className="text-gray-400">Total Teams</h2>
        <p className="text-3xl font-extrabold text-green-400">
          <CountUp end={stats.totalTeams} duration={1.5} />
        </p>
      </div>

      {/* Total Venues */}
      <div className="bg-gradient-to-br from-orange-900/40 to-gray-900/80 border border-orange-500/20 shadow-lg rounded-2xl p-4 hover:scale-105 transition duration-300">
        <h2 className="text-gray-400">Total Venues</h2>
        <p className="text-3xl font-extrabold text-orange-400">
          <CountUp end={stats.totalVenues} duration={1.5} />
        </p>
      </div>

      {/* Total Winners */}
      <div className="bg-gradient-to-br from-purple-900/40 to-gray-900/80 border border-purple-500/20 shadow-lg rounded-2xl p-4 hover:scale-105 transition duration-300">
        <h2 className="text-gray-400">Total Winners</h2>
        <p className="text-3xl font-extrabold text-purple-400">
          <CountUp end={stats.totalWinners} duration={1.5} />
        </p>
      </div>

    </div>
  );
}