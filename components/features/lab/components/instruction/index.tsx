import { Box, Heading } from "@tigasorei/ant";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw";
import gfmMD from "remark-gfm";

function InstcutionSection() {
  const [content, setContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("/sample-instruction.md")
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setContent(text);
      });
  }, []);

  return (
    <Box p="16px" style={{ height: "100vh", overflow: "auto" }}>
      <Heading variant="Heading12">Instruction</Heading>
      <Markdown remarkPlugins={[gfmMD]} rehypePlugins={[rehypeRaw]}>
        {content}
      </Markdown>
    </Box>
  );
}

export default InstcutionSection;
