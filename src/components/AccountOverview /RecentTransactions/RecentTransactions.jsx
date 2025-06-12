import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CURRENCY_SYMBOLS } from '../../../constants/currencies';

const FILTER_OPTIONS = ['All', 'Incoming', 'Outgoing'];

export const RecentTransactions = () => {
  const [filter, setFilter] = useState('All');
  const transactions = useSelector((state) => state.wallet.transactions);

  const filteredTransactions = transactions.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Incoming') return item.amount > 0;
    if (filter === 'Outgoing') return item.amount < 0;
    return true;
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Transactions
        </h2>
        <div className="flex space-x-2">
          {FILTER_OPTIONS.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`whitespace-nowrap px-3 py-1 text-sm rounded-lg cursor-pointer${
                filter === type
                  ? ' bg-indigo-100 text-indigo-600 '
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } `}
            >
              {type}
            </button>
          ))}
          {/* <button className="whitespace-nowrap px-3 py-1 text-sm rounded-lg bg-indigo-100 text-indigo-600 cursor-pointer ">
            All
          </button>
          <button className="whitespace-nowrap px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer ">
            Incoming
          </button>
          <button className="whitespace-nowrap px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer">
            Outgoing
          </button> */}
        </div>
      </div>
      <div className="overflow-x-auto">
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-500">No transactions yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {' '}
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-col">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.description}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${
                      item.amount > 0 ? ' text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.amount < 0 ? '-' : '+'}
                    {CURRENCY_SYMBOLS[item.currency]}
                    {Math.abs(item.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div></div>
    </div>
  );
};
