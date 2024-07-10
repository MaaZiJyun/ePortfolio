"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as CryptoJS from "crypto-js";
import Container from "./Container";

const VerificationPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [hashedPassword, setHashedPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!password) setError("Name is required");

    // Hash the password using MD5
    const hashed = CryptoJS.MD5(password).toString();
    // const hashedasr = CryptoJS.MD5("0909").toString();
    const hashedasr = "5992750ad2a8eae2eb1239676a1c6a96";
    // setHashedPassword(hashed);

    // Here you can perform any logic with the hashed password
    // For example, send it to your server for verification
    console.log("Hashed Password:", hashed);
    console.log("Hashed Answer:", hashedasr);

    // Assuming the hashed password matches the invite code

    if (hashed === hashedasr) {
      localStorage.setItem("isVerified", "true");
      router.push("/resume");
    } else {
      setError("Code incorrect. Please try again later ~");
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-domukiphoto">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 rounded-lg shadow-md lg:w-1/4"
        >
          {error && (
            <div className="flex items-center justify-center rounded-tl-lg rounded-tr-lg text-white bg-red-500 text-xs font-arial p-1">
              <span>{error}</span>
            </div>
          )}
          <div className="p-8">
            <h2 className="text-xl font-arial">招待コードを入力してください</h2>
            <h2 className="text-xs mb-5 font-arial">
              Please enter the invitation code.
            </h2>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="招待コード"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full mt-4 border border-black font-arial bg-white text-black p-2 rounded hover:bg-black hover:text-white"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default VerificationPage;
