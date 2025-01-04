import { ChevronDown } from "lucide-react";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuRoot,
  MenuTrigger,
  MenuItem,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { Platforms } from "@/hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild marginY={2}>
        <Button variant="subtle">
          {selectedPlatform?.name || "Platforms"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            value={platform.slug}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
