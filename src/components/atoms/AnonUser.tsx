import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useAuth } from '../../context/AuthProvider';

export const AnonUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="focus:outline-none">
        <UserIcon className="bg-white rounded-full w-10 h-10 flex justify-center" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {currentUser ? (
            <button
              onClick={logout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Login with Google
            </button>
          )}
        </div>
      )}
    </div>
  );
};
