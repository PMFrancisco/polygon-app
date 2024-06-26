import { Text } from "../atoms/Text";
import { PlansButton } from "./buttons/PlansButton";
import { SubscribeButton } from "./buttons/SubscribeButton";

export const PremiumMembership: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 ml-6 md:ml-20">
      <Text
        as="h1"
        variant="PremiumBannerHeader"
        className="inline-block bg-gradient-to-br from-white via-white via-46% to-[#FFD4FF] bg-clip-text text-transparent"
      >
        Membresía
        <br />
        Premium
      </Text>
      <div className="flex gap-2 md:gap-4 items-center">
        <SubscribeButton />
        <PlansButton />
      </div>
    </div>
  );
};
