import React from 'react';
import { useStore } from '../lib/store';
import Button from '../components/ui/Button';

export default function ProfilePage() {
  const { user, isAuthenticated } = useStore();

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
          <p className="text-gray-600 mb-6">
            Please sign in to view your profile and manage your bookings.
          </p>
          <div className="space-y-4">
            <Button className="w-full">Sign in</Button>
            <Button variant="outline" className="w-full">Create account</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100'}
              alt={user.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full">Edit Profile</Button>
            {user.isHost && (
              <Button variant="outline" className="w-full">Manage Listings</Button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Your Trips</h2>
          <p className="text-gray-600">You have no upcoming trips.</p>
        </div>
      </div>
    </div>
  );
}