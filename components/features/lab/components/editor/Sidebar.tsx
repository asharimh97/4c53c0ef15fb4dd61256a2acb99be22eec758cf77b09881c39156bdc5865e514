import { Flex } from "@tigasorei/ant";
import { ReactNode } from "react";

function Sidebar({ children }: { children: ReactNode }) {
  return (
    <Flex
      flexDirection="column"
      w="200px"
      h="100vh"
      pt="3px"
      border="solid 1px #242424"
    >
      {children}
    </Flex>
  );
}

export default Sidebar;
