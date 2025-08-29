import React from 'react';
import { useSelector } from 'react-redux';

export const UserInfo = () => {
  const currentUser = useSelector((state) =>
    state.auth.users.find((u) => u.id === state.auth.currentUserId)
  );

  const name = currentUser?.name;

  const getInitials = (name) => {
    return name ? name.trim()[0].toUpperCase() : '';
  };

  return (
    <div className="flex items-center ml-4">
      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
        {getInitials(name)}
      </div>
      <span className="ml-2 font-medium">{name || 'User'}</span>
    </div>
  );
};
