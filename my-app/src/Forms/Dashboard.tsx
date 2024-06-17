import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const token = useAuthStore(state => state.token);

  if (!token) {
    navigate('/signin');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl">Welcome to the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
