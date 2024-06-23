import { PremiumMembership } from "./PremiumMembership";

export const PremiumBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#7953DC] to-[#3AAAD9]">
      <PremiumMembership />
      <img
        src="/images/PremiumBannerImage.svg"
        alt="A Black woman with closed eyes, listening to music with headphones and looking concentrated"
        className="h-full object-cover"
      />
    </div>
  );
};
