import {
  ArrowDownTrayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CURRENCY_SYMBOLS } from '../../../constants/currencies';
import { exportToCSV } from '../../../utils/exportToCSV';
import { isCrypto } from '../../../utils/formatting';
import { Pagination } from '../Pagination/Pagination';

const FILTER_OPTIONS = ['All', 'Incoming', 'Outgoing'];
const ITEMS_PER_PAGE = 7;

export const RecentTransactions = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = useSelector((state) => state.wallet.transactions);

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const filteredTransactions = transactions.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Incoming') return item.amount > 0;
    if (filter === 'Outgoing') return item.amount < 0;
    return true;
  });

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastIndex = firstIndex + ITEMS_PER_PAGE;
  const slicedTransactions = filteredTransactions.slice(firstIndex, lastIndex);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-indigo-500/25 ">
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
        </div>
      </div>
      <div className="overflow-x-auto">
        {slicedTransactions.length === 0 ? (
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
              {slicedTransactions.map((item) => (
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
                    {Math.abs(item.amount).toLocaleString('en-CE', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: isCrypto(item.currency) ? 10 : 2,
                    })}
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
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => exportToCSV(filteredTransactions)}
          className="flex items-center gap-1 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          <ArrowDownTrayIcon className="w-5 h-5" strokeWidth={2} />
          Export History
        </button>
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            className=" whitespace-nowrap bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm cursor-pointer"
          >
            <ChevronLeftIcon
              className="w-4 h-4 text-gray-600"
              strokeWidth={3}
            />
          </button>
          <Pagination
            totalPages={totalPages}
            changeCurrentPage={changeCurrentPage}
            currentPage={currentPage}
          />
          <button
            onClick={nextPage}
            className=" whitespace-nowrap bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm cursor-pointer"
          >
            <ChevronRightIcon
              className="w-4 h-4 text-gray-600"
              strokeWidth={3}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
