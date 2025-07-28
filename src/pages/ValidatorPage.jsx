import React from "react";

const sampleValidators = [
  {
    rank: 1,
    address: "0xAbC1234...789",
    votingPower: "120,000 ZNC",
    firstBlock: 10000,
    lastBlock: 15000,
    oneDay: 120,
    sevenDays: 800,
    thirtyDays: 3000,
    active: true,
  },
  {
    rank: 2,
    address: "0xDeF5678...012",
    votingPower: "95,000 ZNC",
    firstBlock: 11000,
    lastBlock: 14800,
    oneDay: 90,
    sevenDays: 600,
    thirtyDays: 2700,
    active: false,
  },
  // Add more sample data here
];

// SVG icon components for overlays

const CellBackground = ({ children }) => (
  <div className="relative overflow-hidden rounded px-3 py-2">
    {/* Overlay */}
    <svg
      className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 40"
      fill="#ffffffff"
    >
      <rect width="100" height="40" />
      <circle cx="20" cy="20" r="10" fill="#36454F" />
    </svg>
    <span className="relative z-10">{children}</span>
  </div>
);

const BlueText = ({ children }) => (
  <span className="text-blue-600 font-mono">{children}</span>
);

const ActiveCell = ({ isActive }) => (
  <span
    className={`font-semibold px-2 py-1 rounded ${
      isActive ? "bg-green-400 text-white" : "bg-red-500 text-white"
    }`}
  >
    {isActive ? "Yes" : "No"}
  </span>
);

function ValidatorPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Validators Top Leaderboard (Blocks Validated)
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#36454F] text-white">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Voting Power</th>
              <th className="px-4 py-3">First Block</th>
              <th className="px-4 py-3">Last Block</th>
              <th className="px-4 py-3">1 Day</th>
              <th className="px-4 py-3">7 Days</th>
              <th className="px-4 py-3">30 Days</th>
              <th className="px-4 py-3">Active</th>
            </tr>
          </thead>
          <tbody>
            {sampleValidators.map((v) => (
              <tr
                key={v.rank}
                className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100"
              >
                <td>
                  <CellBackground>{v.rank}</CellBackground>
                </td>
                <td>
                  <CellBackground>
                    <BlueText>{v.address}</BlueText>
                  </CellBackground>
                </td>
                <td>
                  <CellBackground>{v.votingPower}</CellBackground>
                </td>
                <td>
                  <CellBackground>
                    <BlueText>{v.firstBlock}</BlueText>
                  </CellBackground>
                </td>
                <td>
                  <CellBackground>
                    <BlueText>{v.lastBlock}</BlueText>
                  </CellBackground>
                </td>
                <td>
                  <CellBackground>{v.oneDay}</CellBackground>
                </td>
                <td>
                  <CellBackground>{v.sevenDays}</CellBackground>
                </td>
                <td>
                  <CellBackground>{v.thirtyDays}</CellBackground>
                </td>
                <td>
                  <CellBackground>
                    <ActiveCell isActive={v.active} />
                  </CellBackground>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ValidatorPage;
