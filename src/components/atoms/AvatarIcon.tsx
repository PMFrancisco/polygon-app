import { UserIcon } from '@heroicons/react/24/solid';

interface IconProps {
  photoURL?: string;
}

export const AvatarIcon: React.FC<IconProps> = ({ photoURL }) => (
  photoURL ? (
    <img src={photoURL} alt="User Avatar" className="rounded-full min-w-10 h-10 flex justify-center" />
  ) : (
    <UserIcon className="bg-white rounded-full w-10 h-10 flex justify-center" />
  )
);
