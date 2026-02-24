export default function MatchDetailsModal({ match, onClose }) {
  if (!match) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-11/12 md:w-2/3 max-h-[90vh] overflow-y-auto border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          Match Details - {match["Match No."]}
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <p><span className="text-gray-400">Date:</span> {match["Date"]}</p>
          <p><span className="text-gray-400">Venue:</span> {match["Venue"]}</p>
          <p>
            <span className="text-gray-400">Teams:</span>{" "}
            {match["1st Team"]} vs {match["2nd Team"]}
          </p>
          <p><span className="text-gray-400">Stage:</span> {match["Stage"]}</p>
          <p><span className="text-gray-400">Toss Winner:</span> {match["Toss Winning"]}</p>
          <p><span className="text-gray-400">Toss Decision:</span> {match["Toss Decision"]}</p>
          <p><span className="text-gray-400">1st Innings Score:</span> {match["First Innings Score"]}</p>
          <p><span className="text-gray-400">2nd Innings Score:</span> {match["Second Innings Score"]}</p>
          <p className="text-green-400 font-semibold">
            Winner: {match["Winners"]}
          </p>
          <p>
            <span className="text-gray-400">Winning Margin:</span>{" "}
            {match["Winning Margin"]}
          </p>
          <p className="text-yellow-400 font-semibold">
            Player of Match: {match["Player Of The Match"]}
          </p>
          <p>
            <span className="text-gray-400">Best Bowler:</span>{" "}
            {match["Best Bowler"]} (
            {match["Best Bowler Figure(Wickets Taken)"]}/
            {match["Best Bowler Figure(Runs Recieved)"]})
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button
  onClick={onClose}
  className="px-6 py-2 font-semibold text-white 
             bg-gray-900 
             border border-purple-500 
             rounded-md 
             hover:border-pink-500 
             hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] 
             transition-all duration-300"
>
  Close
</button>
        </div>
      </div>
    </div>
  );
}