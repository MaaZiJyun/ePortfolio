// components/YouTubePreviewer.tsx
import React from 'react';

interface YouTubePreviewerProps {
  videoId: string;
}

const YouTubePreviewer: React.FC<YouTubePreviewerProps> = ({ videoId }) => {
  return (
    <div className="youtube-previewer w-full h-full">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePreviewer;
