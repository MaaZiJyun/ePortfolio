"use client";
import React, { ReactNode, useState, useEffect, isValidElement } from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

interface CodeBlockProps {
  children: ReactNode;
}

const isCodeElement = (
  element: ReactNode
): element is React.ReactElement<{ className: string }> => {
  return isValidElement(element) && typeof element.props.className === "string";
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const [className, setClassName] = useState<string | null>(null);

  useEffect(() => {
    // Parse children to find the class name of the code element
    if (isValidElement(children) && children.props.className) {
      const modifiedClassName = capitalizeFirstLetter(
        children.props.className.replace("lang-", "")
      );
      setClassName(modifiedClassName);
    } else if (Array.isArray(children)) {
      const codeElement = children.find(isCodeElement);
      if (codeElement) {
        const modifiedClassName = capitalizeFirstLetter(
          codeElement.props.className.replace("lang-", "")
        );
        setClassName(modifiedClassName);
      }
    }
  }, [children]);

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleCopy = () => {
    const textToCopy =
      typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        // setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  return (
    <div className="bg-black rounded-lg relative mt-6">
      <div className="flex justify-between px-4 py-3 bg-white bg-opacity-40">
        {className && <span className="text-white">{className}</span>}
        <button onClick={handleCopy} className="text-white">
          {copied ? (
            <div className="flex space-x-2 hover:text-gray-200">
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
              <span className="text-sm">Copied!</span>
            </div>
          ) : (
            <div className="flex space-x-2 hover:text-gray-200">
              <ClipboardDocumentIcon className="h-5 w-5" />
              <span className="text-sm">Copy</span>
            </div>
          )}
        </button>
      </div>
      <pre className="text-white text-sm m-0 bg-white p-4 rounded-b-lg transition-all bg-opacity-30 hover:bg-opacity-20">
        {children}
      </pre>
    </div>
  );
};

export default CodeBlock;
