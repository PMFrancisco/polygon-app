import React from 'react';
import { Button } from '../../atoms/Button';
import { AvatarIcon } from '../../atoms/AvatarIcon';

interface UserIconButtonProps {
  onClick: () => void;
  photoURL?: string | null;
}

export const UserIconButton: React.FC<UserIconButtonProps> = ({ onClick, photoURL }) => (
  <Button onClick={onClick}>
    <AvatarIcon photoURL={photoURL ?? undefined}/>
  </Button>
);
