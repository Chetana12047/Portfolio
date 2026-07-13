import { useEffect, useState } from "react";
import "../styles/heroTitle.css";

const START_TEXT = ">>init.core()";
const FINAL_TEXT = "Chetana Ingle";

export default function HeroTitle() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    // show init.core() immediately
    setLetters(
      START_TEXT.split("").map((char) => ({
        value: char,
        final: false,
      }))
    );

    // wait before morphing
    const delay = setTimeout(() => {
      let current = 0;

      const interval = setInterval(() => {
        const output = [];

        for (let i = 0; i < FINAL_TEXT.length; i++) {
          output.push({
            value:
              i < current
                ? FINAL_TEXT[i]
                : START_TEXT[i] || " ",
            final: i < current,
          });
        }

        setLetters(output);

        current++;

        if (current > FINAL_TEXT.length) {
          clearInterval(interval);

          setLetters(
            FINAL_TEXT.split("").map((c) => ({
              value: c,
              final: true,
            }))
          );
        }
      }, 70);

    }, 500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <h1 className="hero-title">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={letter.final ? "final-char" : "random-char"}
        >
          {letter.value}
        </span>
      ))}
    </h1>
  );
}