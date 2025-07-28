import React, { useState } from "react";

function Tokens() {
  const [searchQuery, setSearchQuery] = useState("");

  // Example data - Replace this with dynamic data as needed
  const tokenData = [
    {
      name: "ZINC",
      symbol: "ZINC",
      price: "$1.23",
      change: "+2.5%",
      volume: "$10,000",
      circCap: "$1,000,000",
      chainCap: "$1,200,000",
      holders: "3,500",
    },
    {
      name: "Tether Zinc",
      symbol: "USZ",
      price: "$1.00",
      change: "-0.2%",
      volume: "$20,000",
      circCap: "$500,000",
      chainCap: "$490,000",
      holders: "2,000",
    },
    // Add more tokens here
  ];

  const filteredTokens = tokenData.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gray-100 text-white overflow-x-auto">
      {/* SVG Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="#F87316"
            fillOpacity="1"
            d="M0,192L30,197.3C60,203,120,213,180,213.3C240,213,300,203,360,186.7C420,171,480,149,540,128C600,107,660,85,720,101.3C780,117,840,171,900,181.3C960,192,1020,160,1080,133.3C1140,107,1200,85,1260,80C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Search Box */}
<div className="px-4 max-w-7xl mx-auto">
  <div className="flex items-center gap-2 w-full">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search by Token name or symbol..."
      className="flex-grow px-4 py-2 rounded placeholder-gray-500 text-black"
      style={{ backgroundColor: "#ffffff" }}
    />
    <button
      className="px-4 py-2 rounded text-white"
      style={{ backgroundColor: "#F97316" }}
    >
      🔍
    </button>
  </div>
</div>


      {/* Table */}
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          All minted Zinc-chain Coins
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#36454F] text-white">
              <tr>
                <th className="px-6 py-3">Token</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Change (%)</th>
                <th className="px-6 py-3">Volume (24H)</th>
                <th className="px-6 py-3">Circulating Market Cap</th>
                <th className="px-6 py-3">Onchain Market Cap</th>
                <th className="px-6 py-3">Holders</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-900 divide-y divide-gray-200">
              {filteredTokens.length > 0 ? (
                filteredTokens.map((token, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium">{token.name}</td>
                    <td className="px-6 py-4">{token.price}</td>
                    <td
                      className={`px-6 py-4 ${
                        token.change.startsWith("-")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {token.change}
                    </td>
                    <td className="px-6 py-4">{token.volume}</td>
                    <td className="px-6 py-4">{token.circCap}</td>
                    <td className="px-6 py-4">{token.chainCap}</td>
                    <td className="px-6 py-4">{token.holders}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No tokens found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
