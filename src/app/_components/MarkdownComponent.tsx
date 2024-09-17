import React, { ReactNode } from "react";
import { useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import CodeBlock from "./CodeBlock";
import Drawer from "./Drawer";

interface MarkdownComponentProps {
  children: ReactNode;
}

interface HeadingProps {
  children: React.ReactNode;
}

const extractText = (node: React.ReactNode): string => {
  console.log(node);

  if (typeof node === "string") {
    return node;
  }
  if (React.isValidElement(node)) {
    // Handle React elements
    return extractText(node.props.children);
  }
  if (Array.isArray(node)) {
    // Handle arrays of nodes
    return node.map(extractText).join("_");
  }
  // Default case for unsupported node types
  return "";
};

const generateIdFromTitle = (title: string) => {
  return title.toLowerCase().replace(/[^\w]+/g, "-"); // Converts the title to a URL-friendly ID
};

// const LatexComponent = ({ children }: MarkdownComponentProps) => {
//   const latexString = Array.isArray(children) ? children.join("") : children;
//   const html = katex.renderToString(latexString as string, {
//     throwOnError: false,
//     displayMode: false,
//   });
//   return <span dangerouslySetInnerHTML={{ __html: html }} />;
// };

const LatexComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Extract text from React nodes
  const latexString = extractText(children);

  // console.log(latexString);

  // Render the LaTeX string to HTML using KaTeX
  const html = katex.renderToString(latexString, {
    throwOnError: false,
    displayMode: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const LatexBlockComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
  <img
    src={src}
    alt={alt}
    className="w-full lg:w-2/3 h-auto hover:w-full hover:shadow-xl transition-all duration-300 "
  />
);

const MarkdownComponents = {
  h1: {
    component: ({ children }: HeadingProps) => {
      const id = generateIdFromTitle(children?.toString() || "");
      return (
        <h1 className="text-lg font-bold text-black mt-10 mb-0" id={id}>
          {children}
        </h1>
      );
    },
  },
  h2: {
    component: ({ children }: HeadingProps) => {
      const id = generateIdFromTitle(children?.toString() || "");
      return (
        <h1 className="text-lg font-bold italic text-black mt-8 mb-0" id={id}>
          {children}
        </h1>
      );
    },
  },
  h3: {
    component: ({ children }: HeadingProps) => {
      const id = generateIdFromTitle(children?.toString() || "");
      return (
        <h1 className="text-base font-bold text-black mt-6 mb-0" id={id}>
          {children}
        </h1>
      );
    },
  },
  p: ({ children }: MarkdownComponentProps) => (
    <p className="text-base text-indent text-black my-2">{children}</p>
  ),
  a: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href} className="text-blue-500 underline">
      {children}
    </a>
  ),
  table: ({ children }: MarkdownComponentProps) => (
    <div className="w-full lg:px-12 overflow-x-scroll">
      <table className="text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: MarkdownComponentProps) => (
    <thead className="border-t-2 border-b-2 border-black font-bold">
      {children}
    </thead>
  ),
  tbody: ({ children }: MarkdownComponentProps) => (
    <tbody className="border-b-2 border-black">{children}</tbody>
  ),
  th: ({ children }: MarkdownComponentProps) => (
    <th className="text-left px-3 py-1">{children}</th>
  ),
  td: ({ children }: MarkdownComponentProps) => (
    <td className="text-left px-3 py-1">{children}</td>
  ),
  li: ({ children }: MarkdownComponentProps) => (
    <li className="text-black text-sm m-0 ml-10">{children}</li>
  ),
  pre: ({ children }: MarkdownComponentProps) => (
    <CodeBlock>{children}</CodeBlock>
  ),
  mark: ({ children }: MarkdownComponentProps) => (
    <mark className="text-lg px-2">{children}</mark>
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
  drawer: ({ children, ...props }: any) => (
    <Drawer title={props.title} issue={props.issue}>
      {children}
    </Drawer>
  ),
  img: ImageComponent,
  Latex: LatexComponent,
  LatexBlock: LatexBlockComponent,
};

export default MarkdownComponents;
