import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface PetalConfettiProps {
  active: boolean;
}

const PetalConfetti = ({ active }: PetalConfettiProps) => {
  const petals = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
      opacity: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute"
          style={{
            left: `${petal.left}%`,
            top: `-${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: `rotate(${petal.rotation}deg)` }}
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 16 12 16C12 16 16 14 16 10C16 6 12 2 12 2Z"
              fill="hsl(50, 95%, 65%)"
              opacity="0.9"
            />
            <path
              d="M12 4C12 4 9 7 9 10C9 13 12 15 12 15"
              stroke="hsl(43, 90%, 50%)"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PetalConfetti;
