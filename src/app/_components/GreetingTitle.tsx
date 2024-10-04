"use client"; // This directive ensures the component runs on the client side

import { useEffect, useState } from "react";
import "../styles/BlinkingCursor.css";
import generateRandomColor from "../_controllers/generateRandomColor";

export default function GreetingTitle() {
  const greets = [
    "やあ、童夢綺です",
    "Hello, this is Dōmuki",
    "哈喽，这里是童夢綺",
    "哈囉，呢度係童夢綺",
    "Halo, ini Dōmuki",
    "مرحبًا، هذا دوموكي",
  ];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [bgColor, setBgColor] = useState<string>("unset"); // Explicitly type as string

  useEffect(() => {
    if (isTyping) {
      if (typingIndex < greets[index].length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText + greets[index][typingIndex]);
          setTypingIndex((prevTypingIndex) => prevTypingIndex + 1);
        }, 120); // Adjust the typing speed here

        return () => clearTimeout(typingTimeout);
      } else {
        // Set a timeout to end the pause after 3 seconds
        const timeoutId = setTimeout(() => {
        //   console.log("stop");
          setIsPaused(true);
          setIsTyping(false);
        }, 3000); // 3-second delay

        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayedText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText.slice(0, -1));
        }, 60); // Adjust the deleting speed here

        return () => clearTimeout(deletingTimeout);
      } else {
        // Switch to the next greeting after deleting is complete
        setIsTyping(true);
        setTypingIndex(0);
        setBgColor(generateRandomColor());
        setIndex((prevIndex) => (prevIndex + 1) % greets.length);
      }
    }
  }, [typingIndex, displayedText, isTyping, index, greets]);

  // Define the BlinkingCursor component within the same file
  function BlinkingCursor() {
    return <span className="blinkingCursor">｜</span>;
  }

  return (
    <h1 className="text-3xl lg:text-6xl">
      <span
        className="bg-white bg-opacity-80 shadow-lg px-3 py-2 rounded-xl font-arial"
        style={{
          color: bgColor, // Set backgroundColor to bgColor
          transition: "color 0.5s ease",
        }}
      >
        {displayedText}
        <BlinkingCursor />
      </span>
    </h1>
  );
}
