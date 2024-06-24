import { Highlights } from "./Highlights"
import { PremiumBanner } from "./PremiumBanner"

export const HomePage: React.FC = () => {
  return (<>
    <PremiumBanner />
    <Highlights />
    </>
  )
}
