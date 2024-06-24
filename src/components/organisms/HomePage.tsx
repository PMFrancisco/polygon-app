import { Highlights } from "./Highlights"
import { PremiumBanner } from "./PremiumBanner"
import { WorkList } from "./WorkList"

export const HomePage: React.FC = () => {
  return (<>
    <PremiumBanner />
    <Highlights />
    <WorkList />
    </>
  )
}
