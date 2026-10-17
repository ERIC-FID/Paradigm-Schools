
import { useEffect, useState } from "react";

function Preloader({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 1200);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 1700);

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
        className="flex gap-2"
        role="status"
        aria-label="Loading"
      >
        <span
          className="size-3 animate-ping rounded-full bg-[#0064C6]"
          aria-hidden="true"
        ></span>

        <span
          className="size-3 animate-ping rounded-full bg-[#0064C6] [animation-delay:0.2s]"
          aria-hidden="true"
        ></span>

        <span
          className="size-3 animate-ping rounded-full bg-[#0064C6] [animation-delay:0.4s]"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
}

export default Preloader;
