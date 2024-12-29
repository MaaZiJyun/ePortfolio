"use client"; // This directive ensures the component runs on the client side

import React, { useEffect, useState } from "react";
import "../styles/BlinkingCursor.css";
import generateRandomColor from "../_controllers/generateRandomColor";

interface DynamicTextProps {
  content: string[]; // 定義 content 參數的類型
}

const DynamicText: React.FC<DynamicTextProps> = ({ content }) => {
  const textList = content;
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState(false);
  const [bgColor, setBgColor] = useState<string>("unset"); // Explicitly type as string

  useEffect(() => {
    if (isTyping) {
      if (typingIndex < textList[index].length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(
            (prevText) => prevText + textList[index][typingIndex]
          );
          setTypingIndex((prevTypingIndex) => prevTypingIndex + 1);
        }, 80); // Adjust the typing speed here

        return () => clearTimeout(typingTimeout);
      } else {
        // Set a timeout to end the pause after 3 seconds
        const timeoutId = setTimeout(() => {
          //   console.log("stop");
          setIsPaused(true);
          setIsTyping(false);
        }, 5000); // 3-second delay

        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayedText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }, 20); // Adjust the deleting speed here

        return () => clearTimeout(deletingTimeout);
      } else {
        // Switch to the next greeting after deleting is complete
        setIsTyping(true);
        setTypingIndex(0);
        setBgColor(generateRandomColor());
        setIndex((prevIndex) => (prevIndex + 1) % textList.length);
      }
    }
  }, [typingIndex, displayedText, isTyping, index, textList]);

  // Define the BlinkingCursor component within the same file
  function BlinkingCursor() {
    return <span className="blinkingCursor">｜</span>;
  }

  return (
    <>
      {/* <span
        style={{
        //   color: bgColor, // Set backgroundColor to bgColor
          transition: "color 0.5s ease",
        }}
      > */}
        {displayedText}
        <BlinkingCursor />
      {/* </span> */}
    </>
  );
};

export default DynamicText;
