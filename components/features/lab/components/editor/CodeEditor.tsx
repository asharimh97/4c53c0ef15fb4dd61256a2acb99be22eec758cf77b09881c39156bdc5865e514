import { Editor } from "@monaco-editor/react";
import { Flex } from "@tigasorei/ant";

function CodeEditor() {
  return (
    <Flex
      w="calc(100% - 200px)"
      h="calc(100 - 150px)"
      margin="0"
      fontSize="14px"
    >
      <Editor
        height="calc(100vh - 150px)"
        language="javascript"
        theme="vs-dark"
      />
    </Flex>
  );
}

export default CodeEditor;
