"use client";
import { useEffect } from "react";
import Container from "./_components/Container";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex w-full h-screen bg-sketch items-end justify-center">
        </div>
      </Container>
    </main>
  );
}
