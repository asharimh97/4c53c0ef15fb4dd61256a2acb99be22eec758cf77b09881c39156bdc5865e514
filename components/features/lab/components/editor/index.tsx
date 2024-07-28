import { Flex, Text } from "@tigasorei/ant";
import Sidebar from "./Sidebar";
import CodeEditor from "./CodeEditor";
import TerminalEditor from "../terminal";

function Editor() {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Sidebar>Lorem ipsum</Sidebar>
        <CodeEditor />
      </Flex>
      <TerminalEditor />
    </Flex>
  );
}

export default Editor;
