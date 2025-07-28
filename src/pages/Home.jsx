import React from "react";
import { ReactComponent as CopyIcon } from '../assets/icons/copy.svg';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 relative text-[#36454F]">
      <div className="bg-gradient-to-r from-gray-800 to-black p-6 rounded-lg text-white relative overflow-hidden">
  {/* Overlay SVG gradient */}
  <svg
    className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 600 200"
  >
    <defs>
      <linearGradient id="searchGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F87316" />
        <stop offset="100%" stopColor="#36454F" />
      </linearGradient>
    </defs>
    <rect width="600" height="200" fill="url(#searchGradient)" />
  </svg>

  <h2 className="text-lg font-semibold mb-4 relative z-10">
    Zinc Blockchain Explorer
  </h2>

  <div className="flex items-center gap-2 relative z-10">
    <input
      type="text"
      placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
      className="w-full px-4 py-2 text-black placeholder-gray-500 rounded-md shadow-sm"
      style={{ backgroundColor: "#fff" }}
    />
    <button
      className="p-2 rounded-md text-white flex items-center justify-center"
      style={{ backgroundColor: "#F97316" }}
    >
      <SearchIcon />
    </button>
  </div>
</div>


      {/* Top Stats */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 my-6">
        <Stat icon={<PriceIcon />} title="ZINC PRICE" value="$123.45" />
        <Stat icon={<TransactionsIcon />} title="TRANSACTIONS" value="1,234,567" />
        <Stat icon={<GasIcon />} title="AVG GAS PRICE" value="0.1 Zinc" />
        <Stat icon={<MarketCapIcon />} title="MARKET CAP" value="$567,890,123" />
        <Stat icon={<BlockIcon />} title="LATEST BLOCK" value="123456" />
        <Stat icon={<VotingIcon />} title="VOTING POWER" value="98,000 ZNC" />
      </div>

      {/* Graph */}
      <div className="bg-white p-4 rounded shadow mb-6 relative overflow-hidden">
        
        <div className="h-32 flex items-center justify-center text-gray-400 relative z-10">
          [ Transaction History Graph Placeholder ]
        </div>
      </div>

      {/* Latest Blocks and Txns */}
      <div className="grid md:grid-cols-2 gap-6">
        <LatestBlocks />
        <LatestTransactions />
      </div>
    </div>
  );
}

// Stat component with SVG icon and overlay background
const Stat = ({ icon, title, value }) => (
  <div className="relative bg-white rounded shadow p-4 flex flex-col items-center text-center overflow-hidden">
    {/* Overlay circle behind icon */}
    <div className="absolute -top-6 w-16 h-16 rounded-full bg-gradient-to-tr from-[#F87316] to-[#36454F] opacity-0"></div>
    <div className="relative z-10 mb-2">{icon}</div>
    <div className="text-sm text-gray-500 z-10">{title}</div>
    <div className="font-bold text-xl z-10">{value}</div>
  </div>
);

// LatestBlocks component with icon and overlay on button
const LatestBlocks = () => (
  <div className="bg-white p-4 rounded shadow relative overflow-hidden">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-[#36454F] flex items-center gap-2">
        <BlockIconSmall /> Latest Blocks
      </h3>
      <button className="text-[#F87316] text-sm relative group">
        View All
        <ViewAllOverlay />
      </button>
    </div>
    <ul className="space-y-2">
      {[1, 2, 3, 4, 5].map(i => (
        <li
          key={i}
          className="text-sm border p-2 rounded flex justify-between hover:bg-[#F87316]/10 transition"
        >
          <div>
            Block #{123450 + i}
            <div className="text-xs text-gray-500">Validated by: Node{i}</div>
          </div>
          <div className="text-xs text-gray-600">5 secs ago</div>
        </li>
      ))}
    </ul>
  </div>
);

// LatestTransactions component with icon and overlay on button
const LatestTransactions = () => (
  <div className="bg-white p-4 rounded shadow relative overflow-hidden">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-[#36454F] flex items-center gap-2">
        <TxIconSmall /> Latest Transactions
      </h3>
      <button className="text-[#F87316] text-sm relative group">
        View All
        <ViewAllOverlay />
      </button>
    </div>
    <ul className="space-y-2">
      {[1, 2, 3, 4, 5].map(i => (
        <li
          key={i}
          className="text-sm border p-2 rounded flex justify-between hover:bg-[#F87316]/10 transition"
        >
          <div>
            TxHash...{i}f{i}e
            <div className="text-xs text-gray-500">From: 0xAb...cd{i}</div>
          </div>
          <div className="text-xs text-gray-600">4 secs ago</div>
        </li>
      ))}
    </ul>
  </div>
);

/** SVG Components **/

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
    />
  </svg>
);

const PriceIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#F87316]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 8v8m-4-4h8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TransactionsIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#36454F]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 10h18M3 14h18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GasIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#F87316]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4v16m8-8H4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MarketCapIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#36454F]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BlockIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#F87316]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      ry="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VotingIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-[#36454F]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14l9-5-9-5-9 5 9 5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 14v7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21l6-3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21l-6-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BlockIconSmall = () => (
  <svg
    className="w-5 h-5 text-[#F87316]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      ry="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TxIconSmall = () => (
  <svg
    className="w-5 h-5 text-[#36454F]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7h16M4 17h16M9 7v10M15 7v10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewAllOverlay = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-0 rounded"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    fill="#F87316"
  >
    <rect width="100" height="100" />
  </svg>
);

const GraphBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 200 100"
  >
    <defs>
      <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F87316" />
        <stop offset="100%" stopColor="#36454F" />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="url(#graphGradient)" />
    <path
      d="M0,80 L20,50 L40,60 L60,30 L80,40 L100,20 L120,30 L140,10 L160,20 L180,5 L200,0"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      opacity="0"
    />
  </svg>
);

export default Home;
