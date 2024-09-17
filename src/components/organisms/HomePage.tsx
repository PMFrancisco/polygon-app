import { Highlights } from "./Highlights"
import { PremiumBanner } from "./PremiumBanner"
import { WorkList } from "./WorkList"

export const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="min-w-lg max-w-[1024px] px-8">
        <PremiumBanner />
        <Highlights />
        <WorkList />
      </div>
    </div>
  );
};
