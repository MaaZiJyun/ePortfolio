import React, { ReactNode } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import CodeBlock from "./CodeBlock";

interface MarkdownComponentProps {
  children: ReactNode;
}

const LatexComponent = ({ children }: MarkdownComponentProps) => {
  const latexString = Array.isArray(children) ? children.join("") : children;
  const html = katex.renderToString(latexString as string, {
    throwOnError: false,
    displayMode: false,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const LatexBlockComponent = ({ children }: MarkdownComponentProps) => {
  const latexString = Array.isArray(children) ? children.join("") : children;
  const html = katex.renderToString(latexString as string, {
    throwOnError: false,
    displayMode: true,
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="max-w-full h-auto" />
);

const MarkdownComponents = {
  h1: ({ children }: MarkdownComponentProps) => (
    <h1 className="text-lg font-bold text-black mt-6 mb-0">{children}</h1>
  ),
  h2: ({ children }: MarkdownComponentProps) => (
    <h2 className="text-lg font-bold italic text-black mt-3 mb-0">
      {children}
    </h2>
  ),
  h3: ({ children }: MarkdownComponentProps) => (
    <h3 className="text-base font-bold text-black mt-3 mb-0">{children}</h3>
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
    <table className="text-sm my-2 lg:my-4 lg:mx-12">{children}</table>
  ),
  li: ({ children }: MarkdownComponentProps) => (
    <li className="text-black text-sm m-0">{children}</li>
  ),
  pre: ({ children }: MarkdownComponentProps) => (
    <CodeBlock>{children}</CodeBlock>
  ),
  img: ImageComponent,
  Latex: LatexComponent,
  LatexBlock: LatexBlockComponent,
};

export default MarkdownComponents;
