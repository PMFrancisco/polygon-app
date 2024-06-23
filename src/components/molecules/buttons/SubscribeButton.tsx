import { Button } from "../../atoms/Button";

export const SubscribeButton: React.FC = () => {
  const handleClick = () => {};

  return (
    <Button
      onClick={handleClick}
      className="h-11 bg-[#ffffff14] px-6 py-2 text-white"
    >
      Suscribirse
    </Button>
  );
};
