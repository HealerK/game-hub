import { HStack, Icon } from "@chakra-ui/react";
import { Switch } from "./switch";
import { useColorMode } from "./color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        checked={colorMode == "dark"}
        onChange={toggleColorMode}
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
      >
        Dark Mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
