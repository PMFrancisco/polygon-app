import { Button } from "../../atoms/Button";

export const UploadButton: React.FC = () => {
  const handleClick = () => {};

  return (
    <Button
      onClick={handleClick}
      className="bg-[#7855DC] text-white px-6 py-2 m-2 rounded-full whitespace-nowrap"
    >
      Subir obra
    </Button>
  );
};
