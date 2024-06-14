import React, { ReactNode } from 'react';

interface MarkdownComponentProps {
  children: ReactNode;
}

const MarkdownComponents = {
  h1: ({ children }: MarkdownComponentProps) => <h1 className="text-lg font-bold text-black mt-6 mb-0">{children}</h1>,
  h2: ({ children }: MarkdownComponentProps) => <h2 className="text-base font-semibold text-black mt-3 mb-0">{children}</h2>,
  p: ({ children }: MarkdownComponentProps) => <p className="text-base text-indent text-black mt-2 mb-0">{children}</p>,
  a: ({ children, href }: { children: ReactNode, href: string }) => <a href={href} className="text-blue-500 underline">{children}</a>,
  // Add more custom styles for other elements as needed
};

export default MarkdownComponents;