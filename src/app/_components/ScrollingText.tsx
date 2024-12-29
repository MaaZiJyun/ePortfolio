import React from "react";

interface ScrollingTextProps {
  text: string; // 滚动文字的内容
  speed?: number; // 滚动速度，默认为 5 秒
  bgColor?: string; // 背景颜色
  color?: string; // 文字颜色
  className?: string; // 自定义类名
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  text,
  speed = 10,
  className = "",
  color = "black",
  bgColor = "white",
}) => {
  return (
    <div
      className={`flex overflow-hidden w-full h-full items-center ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="flex animate-marquee whitespace-nowrap py-3"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* 滚动内容重复两次，确保无缝滚动 */}
        <span className="mx-4" style={{ color: color }}>
          {text}
        </span>
        <span className="mx-4" style={{ color: color }}>
          {text}
        </span>
        <span className="mx-4" style={{ color: color }}>
          {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;
