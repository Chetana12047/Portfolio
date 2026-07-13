import { useEffect, useRef, useState } from "react";
import "../styles/brandSignature.css";

const wordSets = [
  ["Imagine", "Innovate", "Inspire"],
  ["Learn", "Lead", "Lift"],
  ["Create", "Challenge", "Conquer"],
  ["Embrace", "Explore", "Evolve"],
];

export default function BrandSignature({ hovered }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [bright, setBright] = useState(false);

  const running = useRef(false);

  useEffect(() => {
    if (!hovered || running.current) return;

    running.current = true;
    setPlaying(true);

    let current = 0;

    const animate = () => {
      setIndex(current);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);

        setTimeout(() => {
          current++;

          if (current < wordSets.length && hovered) {
            animate();
          } else {
            running.current = false;
            setPlaying(false);
          }
        }, 250);
      }, 900);
    };

    animate();
  }, [hovered]);

  return (
    <div className="brand-signature">
      <span className="brand-logo">
  <span

  className={`brand-letter ${hovered ? "hovered" : ""}`}

>
    C
</span>
</span>
<div className={`brand-popup ${playing ? "show" : ""}`}>
      <div
  className={`brand-words ${visible ? "show" : ""} ${
    hovered ? "hovered" : ""
  }`}
>
        {wordSets[index].map((word, i) => (
          <span
            key={word}
            style={{
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
      </div>

    </div>
  );
}