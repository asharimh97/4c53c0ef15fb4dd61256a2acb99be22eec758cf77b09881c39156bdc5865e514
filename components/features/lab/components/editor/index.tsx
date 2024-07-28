import { Flex, Text } from "@tigasorei/ant";
import Sidebar from "./Sidebar";
import CodeEditor from "./CodeEditor";

function Editor() {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Sidebar>Lorem ipsum</Sidebar>
        <CodeEditor />
      </Flex>
      <Text>Lorem ipsum dolorsit amet</Text>
    </Flex>
  );
}

export default Editor;
