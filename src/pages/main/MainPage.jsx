import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AccountOverview } from '../../components/AccountOverview/AccountOverview';
import { TotalBalance } from '../../components/TotalBalance/TotalBalance';
import { useDispatch, useSelector } from 'react-redux';
import { loadWallet } from '../../redux/slices/walletSlice';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const MainPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.currentUserId) {
      const currentUser = auth.users.find((u) => u.id === auth.currentUserId);
      if (currentUser) {
        dispatch(loadWallet(currentUser.wallet));
      }
    }
  }, [auth.currentUserId, auth.users, dispatch]);
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
      </main>
    </>
  );
};
