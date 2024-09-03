import React, { ReactNode } from "react";
import { useState } from 'react';
import katex from "katex";
import "katex/dist/katex.min.css";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import CodeBlock from "./CodeBlock";

interface MarkdownComponentProps {
  children: ReactNode;
}

const extractText = (node: React.ReactNode): string => {
  console.log(node);
  
  if (typeof node === 'string') {
    return node;
  }
  if (React.isValidElement(node)) {
    // Handle React elements
    return extractText(node.props.children);
  }
  if (Array.isArray(node)) {
    // Handle arrays of nodes
    return node.map(extractText).join('_');
  }
  // Default case for unsupported node types
  return '';
};

// const LatexComponent = ({ children }: MarkdownComponentProps) => {
//   const latexString = Array.isArray(children) ? children.join("") : children;
//   const html = katex.renderToString(latexString as string, {
//     throwOnError: false,
//     displayMode: false,
//   });
//   return <span dangerouslySetInnerHTML={{ __html: html }} />;
// };

const LatexComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Extract text from React nodes
  const latexString = extractText(children);

  console.log(latexString);
  

  // Render the LaTeX string to HTML using KaTeX
  const html = katex.renderToString(latexString, {
    throwOnError: false,
    displayMode: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const LatexBlockComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Extract text from React nodes
  const latexString = extractText(children);

  // console.log(latexString);
  

  // Render the LaTeX string to HTML using KaTeX
  const html = katex.renderToString(latexString, {
    throwOnError: false,
    displayMode: true,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="lg:w-2/3 h-auto" />
);

const MarkdownComponents = {
  h1: ({ children }: MarkdownComponentProps) => (
    <h1 className="text-lg font-bold text-black mt-10 mb-0">{children}</h1>
  ),
  h2: ({ children }: MarkdownComponentProps) => (
    <h2 className="text-lg font-bold italic text-black mt-8 mb-0">
      {children}
    </h2>
  ),
  h3: ({ children }: MarkdownComponentProps) => (
    <h3 className="text-base font-bold text-black mt-6 mb-0">{children}</h3>
  ),
  p: ({ children }: MarkdownComponentProps) => (
    <p className="text-base text-indent text-black mt-2 mb-0">{children}</p>
  ),
  a: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href} className="text-blue-500 underline">
      {children}
    </a>
  ),
  table: ({ children }: MarkdownComponentProps) => (
    <div className="w-full lg:px-12">
      <table className="text-sm my-2 lg:my-4">{children}</table>
    </div>
  ),
  li: ({ children }: MarkdownComponentProps) => (
    <li className="text-black text-sm m-0 ml-10">{children}</li>
  ),
  pre: ({ children }: MarkdownComponentProps) => (
    <CodeBlock>{children}</CodeBlock>
  ),
  code: ({ children }: MarkdownComponentProps) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-red-500">
      {children}
    </code>
  ),
  blockquote: ({ children }: MarkdownComponentProps) => (
    <div className="px-6 lg:px-12">
      <blockquote>{children}</blockquote>
    </div>
  ),
  img: ImageComponent,
  Latex: LatexComponent,
  LatexBlock: LatexBlockComponent,
};

export default MarkdownComponents;
