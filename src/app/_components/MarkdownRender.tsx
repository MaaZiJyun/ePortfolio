import React from 'react';
import Markdown from 'markdown-to-jsx';
import MarkdownComponents from './MarkdownComponent';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <Markdown
      options={{
        overrides: MarkdownComponents,
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;
