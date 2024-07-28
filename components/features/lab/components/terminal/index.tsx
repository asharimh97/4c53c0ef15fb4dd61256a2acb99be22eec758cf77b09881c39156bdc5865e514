import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";

import "@xterm/xterm/css/xterm.css";

function TerminalEditor() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new Terminal();

    terminal.open(terminalRef.current);
    terminal.write("Hello, this is a terminal\n");

    return () => {
      terminal.dispose();
    };
  }, []);

  return (
    <div style={{ height: 150, overflow: "auto" }}>
      <div ref={terminalRef} />
    </div>
  );
}

export default TerminalEditor;
