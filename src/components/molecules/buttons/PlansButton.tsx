import { Button } from "../../atoms/Button";

export const PlansButton: React.FC = () => {
  const handleClick = () => {};

  return (
    <Button
      onClick={handleClick}
      className="h-11 border-2 border-[#E3E3E3] px-6 py-2 text-white whitespace-nowrap"
    >
      Descubrir planes
    </Button>
  );
};
