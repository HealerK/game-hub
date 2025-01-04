import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuRoot,
  MenuTrigger,
  MenuItem,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild marginY={2}>
        <Button variant="subtle">Platforms</Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem value={platform.slug} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
