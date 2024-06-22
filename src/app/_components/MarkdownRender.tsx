import React from 'react';
import Markdown from 'markdown-to-jsx';
import MarkdownComponent from './MarkdownComponent';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <Markdown
      options={{
        overrides: {
          ...MarkdownComponent,
          Latex: {
            component: MarkdownComponent.Latex,
            props: { chart: true }, // Ensure that it uses the custom Latex component
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;
