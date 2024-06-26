import { Text } from "../atoms/Text";
import { HighlightsMenu } from "./HighlightsMenu";

export const Highlights: React.FC = () => {
  return (
    <div className="grid gap-4 md:flex md:gap-28 my-8">
      <Text
        as="h3"
        variant="Highlights"
        className="whitespace-nowrap text-white"
      >
        Obras destacadas
      </Text>
      <HighlightsMenu />
    </div>
  );
};
