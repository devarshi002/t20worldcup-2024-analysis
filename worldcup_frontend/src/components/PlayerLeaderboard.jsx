import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function PlayerLeaderboard({ matches }) {
  // Count Player of the Match awards
  const playerCount = {};

  matches.forEach((m) => {
    const player = m["Player Of The Match"]?.trim();
    if (player && player !== "") {
      playerCount[player] = (playerCount[player] || 0) + 1;
    }
  });

  // Convert to array & sort descending
  const leaderboardData = Object.keys(playerCount)
    .map((player) => ({
      player,
      awards: playerCount[player],
    }))
    .sort((a, b) => b.awards - a.awards)
    .slice(0, 10);

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
        🏆 Top Player of the Match Awards
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={leaderboardData} margin={{ bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          
          <XAxis
            dataKey="player"
            interval={0}
            angle={-30}
            textAnchor="end"
            height={80}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          
          <YAxis tick={{ fill: "#9ca3af" }} />
          
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="awards"
            fill="#fbbf24"
            radius={[6, 6, 0, 0]}
            name="Awards"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}