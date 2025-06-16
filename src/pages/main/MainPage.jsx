import React from 'react';
import { motion } from 'framer-motion';

import { AccountOverview } from '../../components/AccountOverview /AccountOverview';
import { Footer } from '../../components/Footer/Footer';
import { TotalBalance } from '../../components/TotalBalance/TotalBalance';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const MainPage = () => {
  return (
    <>
      <main className="container mx-auto px-6 py-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0, ease: 'linear' }}
        >
          <TotalBalance />
        </motion.div>
        <AccountOverview />
        <Footer />
      </main>
    </>
  );
};
