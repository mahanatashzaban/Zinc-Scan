import React, { useState } from 'react';
import { ReactComponent as CopyIcon } from '../assets/icons/copy.svg';

const Blockchain = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied: ' + text);
  };

  const exampleData = Array.from({ length: 25 }, (_, index) => ({
    hash: `0xABCDEF${index}`,
    from: '0x61750CeBE9B843f9C2556fB2aD01184e15E29039',
    to: '0x61750CeBE9B843f9C2556fB2aD01184e15E29039',
    amount: '2.5 Zinc',
    status: 'Success',
    time: '2025-07-25 12:30',
    fee: '0.001',
    block: 100000 + index
  }));

  const shorten = (str) => str.slice(0, 6) + '...' + str.slice(-4);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search */}
      <div className="flex mb-6 gap-2">
        <input
          type="text"
          placeholder="Search by Address/Txn Hash/Block/Token/Domain Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        />
        <button
          className="px-4 py-2 rounded text-white"
          style={{ backgroundColor: '#F97316' }}
        >
          🔍
        </button>
      </div>

      {/* Four metric boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          ['TRANSACTIONS (24H)', '12,958,531 (9.05%)'],
          ['PENDING TRANSACTIONS (LAST 1H)', '343 (Average)'],
          ['TOTAL TRANSACTION FEE (24H)', '490.23 Zinc (16.26%)'],
          ['AVG. TRANSACTION FEE (24H)', '0.0292 USD (8.62%)']
        ].map(([title, subtitle], idx) => (
          <div key={idx} className="bg-white shadow-md p-4 rounded-xl relative overflow-hidden">
            <div className="absolute right-3 top-3 opacity-10">
              <svg width="32" height="32" fill="#999">
                <circle cx="16" cy="16" r="16" />
              </svg>
            </div>
            <h4 className="text-xs text-gray-600 mb-1">{title}</h4>
            <p className="text-lg font-bold">{subtitle}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md shadow-lg">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-[#36454F] text-white">
            <tr>
              {['Txn Hash', 'From', 'To', 'Amount', 'Status', 'Time', 'Fee', 'Block'].map((h, i) => (
                <th key={i} className="px-4 py-2 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {exampleData.map((tx, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    {tx.hash}
                    <button onClick={() => handleCopy(tx.hash)}>
                      <CopyIcon className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-blue-600">
                  <div className="flex items-center gap-2">
                    {shorten(tx.from)}
                    <button onClick={() => handleCopy(tx.from)}>
                      <CopyIcon className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-blue-600">
                  <div className="flex items-center gap-2">
                    {shorten(tx.to)}
                    <button onClick={() => handleCopy(tx.to)}>
                      <CopyIcon className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2">{tx.amount}</td>
                <td className="px-4 py-2">{tx.status}</td>
                <td className="px-4 py-2">{tx.time}</td>
                <td className="px-4 py-2">{tx.fee}</td>
                <td className="px-4 py-2">{tx.block}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 p-4">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n)}
              className={`px-3 py-1 rounded-md text-white ${
                currentPage === n ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
