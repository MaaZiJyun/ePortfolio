"use client";
import React, { ReactNode, useState, useEffect, isValidElement } from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Custom CSS style
const cssStyles = `
.custom-syntax-pre span {
  color: #252a34 !important;
}
.custom-syntax-pre span.token.keyword {
  color: #ff2e63 !important;
}
.custom-syntax-pre span.token.comment {
  color: #D2D2D2 !important;
}
.custom-syntax-pre span.token.class-name {
  color: #08d9d6 !important;
}
.custom-syntax-pre span.token.function {
  color: #08d9d6 !important;
}
.custom-syntax-pre span.token.operator {
  color: #ff2e63 !important;
}
`;

interface CodeBlockProps {
  children: ReactNode;
}

const isCodeElement = (
  element: ReactNode
): element is React.ReactElement<{ className: string }> => {
  return isValidElement(element) && typeof element.props.className === "string";
};

const extractTextContent = (children: ReactNode): string => {
  if (typeof children === "string") {
    return children;
  } else if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === "string" ? child : ""))
      .join("");
  } else if (isValidElement(children)) {
    return children.props.children
      ? extractTextContent(children.props.children)
      : "";
  } else {
    return "";
  }
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<string | null>(null);
  const codeString = extractTextContent(children);

  useEffect(() => {
    // Parse children to find the class name of the code element
    if (isValidElement(children) && children.props.className) {
      const modifiedClassName = children.props.className.replace("lang-", "");
      setLang(modifiedClassName);
    } else if (Array.isArray(children)) {
      const codeElement = children.find(isCodeElement);
      if (codeElement) {
        const modifiedClassName = codeElement.props.className.replace(
          "lang-",
          ""
        );
        setLang(modifiedClassName);
      }
    }
  }, [children]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  return (
    <div className="bg-white mt-6 rounded-lg">
      <style>{cssStyles}</style> {/* Add custom CSS here */}
      <div className="code-block-head flex justify-between px-6 py-2 rounded-tl-lg rounded-tr-lg">
        <span className="text-black">Source Code</span>
        <button onClick={handleCopy} className="text-black">
          {copied ? (
            <div className="flex space-x-2 hover:opacity-50">
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
              <span>Copied!</span>
            </div>
          ) : (
            <div className="flex space-x-2 hover:opacity-50">
              <ClipboardDocumentIcon className="h-5 w-5" />
              <span>Copy</span>
            </div>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={lang ?? ""}
        style={githubGist}
        className="custom-syntax-pre"
        showLineNumbers={true}
        wrapLines={true}
        lineNumberStyle={{ color: "#ccc" }}
        codeTagProps={{ className: "font-mono" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
