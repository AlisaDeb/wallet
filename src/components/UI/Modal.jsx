import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import {
  convertAndTransfer,
  syncWalletToAuth,
} from '../../redux/slices/walletSlice';

export const Modal = ({
  isOpen,
  onClose,
  fromAmount,
  toAmount,
  fromCurrency,
  toCurrency,
  rate,
}) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(
      convertAndTransfer({
        fromAmount: parseFloat(fromAmount),
        toAmount: parseFloat(toAmount),
        fromCurrency,
        toCurrency,
      })
    );
    onClose();
    dispatch(syncWalletToAuth());
    toast.success('Transaction Successful!');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h3 className="text-xl font-semibold text-gray mb-4">
              Confirm Transaction
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">From Amount:</span>
                <span className="font-medium">
                  {fromAmount} {fromCurrency}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">To Amount: </span>
                <span className="font-medium">
                  {toAmount} {toCurrency}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exchange Rate:</span>
                <span className="font-medium">
                  1 {fromCurrency} = {rate} {toCurrency}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fee:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium">
                    {fromAmount} {fromCurrency}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleConfirm}
                className="whitespace-nowrap flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={onClose}
                className="whitespace-nowrap flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
