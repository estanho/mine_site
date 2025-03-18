"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FloatingText {
  id: number;
  value: string;
  className: string;
  x: number;
  y: number;
}

const DiceEffect: React.FC = () => {
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [counter, setCounter] = useState(0);

  const createFloatingText = () => {
    const number = Math.floor(Math.random() * 20) + 1;
    const sign = Math.random() > 0.5 ? 1 : -1;
    const value = number * sign;

    const newText: FloatingText = {
      id: counter,
      value:
        sign > 0 ? `+${value} girinos` : `${value.toString()} girinos 🤣🎉`,
      className: sign > 0 ? "text-green-500" : "text-red-500",
      x: Math.random() * 60 - 90,
      y: 0,
    };

    setFloatingTexts((prev) => [...prev, newText]);
    setCounter((prev) => prev + 1);

    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((text) => text.id !== newText.id));
    }, 1500);
  };

  return (
    <div className="game-area">
      <div className="character"></div>

      {/* Textos flutuantes */}
      {floatingTexts.map((text) => (
        <div
          key={text.id}
          className={`floating-text ${text.className}`}
          style={{
            left: `calc(50% + ${text.x}px)`,
            top: `calc(12%)`,
          }}
        >
          {text.value}
        </div>
      ))}

      <div>
        <button className="cursor-pointer" onClick={createFloatingText}>
          <Image
            src="./logo.svg"
            className="h-42 w-42 hover:animate-pulse"
            width={144}
            height={144}
            alt="Logo do Servidor da Lagoa Azul"
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default DiceEffect;
