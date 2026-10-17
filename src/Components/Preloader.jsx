
import { useEffect, useState } from "react";

function Preloader({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Start fading out after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 4500);

    // Completely remove preloader after 5 seconds
    const finishTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isLeaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="flex items-center justify-center gap-3"
        role="status"
        aria-label="Loading"
      >
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="size-3 animate-ping rounded-full bg-[#0064C6]"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: "0.8s",
              animationIterationCount: "infinite",
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

export default Preloader;
