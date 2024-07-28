import { Editor } from "@monaco-editor/react";
import { Flex } from "@tigasorei/ant";

function CodeEditor() {
  return (
    <Flex w="calc(100% - 200px)" margin="0" fontSize="14px">
      <Editor height="100vh" language="javascript" theme="vs-dark" />
    </Flex>
  );
}

export default CodeEditor;
