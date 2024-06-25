import { UserIcon } from "@heroicons/react/24/solid";

interface UploaderPicProps {
  uploaderPic: string;
}

export const UploaderPic: React.FC<UploaderPicProps> = ({ uploaderPic }) => {
  return uploaderPic ? (
    <img
      src={uploaderPic}
      alt="Uploader Pic"
      className="rounded-full w-5 h-5"
    />
  ) : (
    <UserIcon className="bg-white rounded-full w-5 h-5 flex justify-center text-black" />
  );
};
