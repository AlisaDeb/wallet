import React from 'react';
import { motion } from 'framer-motion';

import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';
import { RecentTransactions } from './RecentTransactions/RecentTransactions';
import { SecurityStatus } from './RightPanel/SecurityStatus/SecurityStatus';
import { TopUpBalance } from './RightPanel/TopUpBalance/TopUpBalance';

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const AccountOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {' '}
      <div className="lg:col-span-2 space-y-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0, ease: 'linear' }}
        >
          <CurrencyConverter />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3, ease: 'linear' }}
        >
          <RecentTransactions />
        </motion.div>
      </div>
      <div className="space-y-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6, ease: 'linear' }}
        >
          <TopUpBalance />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <SecurityStatus />
        </motion.div>
      </div>
    </div>
  );
};
