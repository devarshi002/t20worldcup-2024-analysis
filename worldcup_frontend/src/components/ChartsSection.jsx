import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ChartsSection({ matches }) {
  // =========================
  // Wins & Losses per Team
  // =========================
  const teamStats = {};

  matches.forEach((m) => {
    const team1 = m["1st Team"]?.trim();
    const team2 = m["2nd Team"]?.trim();
    const winner = m["Winners"]?.trim();

    if (
      !team1 ||
      !team2 ||
      !winner ||
      winner === "No Result" ||
      winner === "Tie"
    ) {
      return;
    }

    const t1 = team1.toLowerCase();
    const t2 = team2.toLowerCase();
    const win = winner.toLowerCase();

    if (!teamStats[team1]) {
      teamStats[team1] = { team: team1, wins: 0, losses: 0 };
    }
    if (!teamStats[team2]) {
      teamStats[team2] = { team: team2, wins: 0, losses: 0 };
    }

    if (win === t1) {
      teamStats[team1].wins += 1;
      teamStats[team2].losses += 1;
    } else if (win === t2) {
      teamStats[team2].wins += 1;
      teamStats[team1].losses += 1;
    }
  });

  const winLossData = Object.values(teamStats);

  // =========================
  // Matches by Stage (Pie Chart)
  // =========================
  const stageCount = {};
  matches.forEach((m) => {
    const stage = m["Stage"];
    if (stage) {
      stageCount[stage] = (stageCount[stage] || 0) + 1;
    }
  });

  const stageData = Object.keys(stageCount).map((stage) => ({
    name: stage,
    value: stageCount[stage],
  }));

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {/* Wins vs Losses */}
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-400">
          Wins vs Losses per Team
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={winLossData}>
            <XAxis
              dataKey="team"
              angle={-45}
              textAnchor="end"
              interval={0}
              stroke="#9ca3af"
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                color: "#fff",
              }}
            />
            <Legend />
            <Bar dataKey="wins" fill="#22c55e" name="Wins" />
            <Bar dataKey="losses" fill="#ef4444" name="Losses" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Matches by Stage */}
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 shadow-xl rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 text-purple-400">
          Matches by Stage
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={stageData}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {stageData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                color: "#fff",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}