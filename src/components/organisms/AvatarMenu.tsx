import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthProvider";
import { UserMenuButton } from "../molecules/buttons/UserMenuButton";
import { UserIconButton } from "../molecules/buttons/UserIconButton";

export const AvatarMenu: React.FC = () => {
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
    <div className="relative p-5">
      <UserIconButton onClick={toggleMenu} photoURL={currentUser?.photoURL} />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {currentUser ? (
            <UserMenuButton onClick={logout}>Logout</UserMenuButton>
          ) : (
            <UserMenuButton onClick={handleGoogleLogin}>
              Login with Google
            </UserMenuButton>
          )}
        </div>
      )}
    </div>
  );
};
