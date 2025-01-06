import { HStack } from "@chakra-ui/react";
import { Switch } from "./switch";
import { useColorMode } from "./color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette="blue"
        checked={colorMode == "dark"}
        onChange={toggleColorMode}
        whiteSpace="nowrap"
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
