import { Box, Heading, Paragraph } from "@tigasorei/ant";
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
      <Markdown
        remarkPlugins={[gfmMD]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: (props) => {
            return <Heading variant="Heading20" {...props} />;
          },
          h3: (props) => {
            return <Heading variant="Heading14" {...props} />;
          },
          p: (props) => {
            return <Paragraph variant="Body12" m="0 0 16px" {...props} />;
          },
        }}
      >
        {content}
      </Markdown>
    </Box>
  );
}

export default InstcutionSection;
