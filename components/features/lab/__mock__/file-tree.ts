// eslint-disable-next-line import/prefer-default-export
export const fileTree = {
  directories: [
    {
      id: "2d9bb95e-b99a-4d11-b196-12cf8854577c",
      title: "src",
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:13:30",
      shortid: "ryLzZTpfr5",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: null,
    },
    {
      id: "f1b9f676-d22d-43e1-a74b-b945abf54afd",
      title: "components",
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:13:30",
      shortid: "SJDzbapfSq",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: "ryLzZTpfr5",
    },
    {
      id: "7212d0a5-6364-4050-a82d-5dba0c7b23fd",
      title: "editor",
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:13:30",
      shortid: "ry_fZ6TfH9",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: "ryLzZTpfr5",
    },
    {
      id: "4967a93e-bc74-4d82-bd9c-e921f68e3308",
      title: "utils",
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:13:30",
      shortid: "SJKM-a6Mr5",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: "ryLzZTpfr5",
    },
    {
      id: "58845564-f970-4243-80cd-d74562674641",
      title: ".codesandbox",
      inserted_at: "2022-04-24T15:20:14",
      updated_at: "2022-04-24T15:20:14",
      shortid: "B18nc1Qrc",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: null,
    },
  ],
  modules: [
    {
      code: '{\n  "name": "react-monaco-file-tree",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@emotion/react": "^11.9.0",\n    "@emotion/styled": "^11.8.1",\n    "@monaco-editor/react": "^4.4.2",\n    "@testing-library/jest-dom": "^5.16.4",\n    "@testing-library/react": "^13.1.1",\n    "@testing-library/user-event": "^13.5.0",\n    "@types/jest": "^27.4.1",\n    "@types/node": "^16.11.27",\n    "@types/react": "^18.0.6",\n    "@types/react-dom": "^18.0.2",\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    "react-icons": "^4.3.1",\n    "react-scripts": "5.0.1",\n    "typescript": "^4.6.3",\n    "web-vitals": "^2.1.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "eslintConfig": {\n    "extends": ["react-app", "react-app/jest"]\n  },\n  "browserslist": {\n    "production": [">0.2%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "keywords": [],\n  "description": ""\n}\n',
      id: "c23f3f67-d478-4b0c-a7d7-8e7be9b50d96",
      is_binary: false,
      title: "package.json",
      sha: null,
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2024-03-08T01:33:40",
      upload_id: null,
      shortid: "By-xM-p6fr5",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: null,
    },
    {
      code: 'import React, { useState } from "react";\nimport Sidebar from "./components/sidebar";\nimport { useFilesFromSandbox } from "./utils";\nimport { Code } from "./editor/code";\nimport styled from "@emotion/styled";\nimport { Type, File, Directory, findFileByName } from "./utils/file-manager";\nimport "./App.css";\nimport { FileTree } from "./components/file-tree";\n\nconst CURRENT_SANDBOX_ID = "ww9kis";\n\nconst dummyDir: Directory = {\n  id: "1",\n  name: "loading...",\n  type: Type.DUMMY,\n  parentId: undefined,\n  depth: 0,\n  dirs: [],\n  files: []\n};\n\nconst App = () => {\n  const [rootDir, setRootDir] = useState(dummyDir);\n  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);\n  useFilesFromSandbox(CURRENT_SANDBOX_ID, (root) => {\n    if (!selectedFile) {\n      setSelectedFile(findFileByName(root, "index.tsx"));\n    }\n    setRootDir(root);\n  });\n\n  const onSelect = (file: File) => setSelectedFile(file);\n\n  return (\n    <div>\n      <Main>\n        <Sidebar>\n          <FileTree\n            rootDir={rootDir}\n            selectedFile={selectedFile}\n            onSelect={onSelect}\n          />\n        </Sidebar>\n        <Code selectedFile={selectedFile} />\n      </Main>\n    </div>\n  );\n};\n\nconst Main = styled.main`\n  display: flex;\n`;\n\nexport default App;\n',
      id: "78f9c19f-cb56-4362-8a26-83a4128990dc",
      is_binary: false,
      title: "App.tsx",
      sha: null,
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:14:32",
      upload_id: null,
      shortid: "S1vxGZ6TGrc",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: "ryLzZTpfr5",
    },
    {
      code: "import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});\n",
      id: "16be1cff-1f10-4e38-bf6d-91a32f24b06a",
      is_binary: false,
      title: "App.test.tsx",
      sha: null,
      inserted_at: "2022-04-24T13:13:30",
      updated_at: "2022-04-24T13:13:30",
      upload_id: null,
      shortid: "r18xfbTTzSc",
      source_id: "3e04d850-3b4c-4b68-b157-35298c9aa23e",
      directory_shortid: "ryLzZTpfr5",
    },
  ],
};
