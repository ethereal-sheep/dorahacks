import { useEffect, useState } from "react";

export default function useAnimationTimer(
  duration: number,
  delay = 0,
  reverse = false
) {
  const [elapsed, setElapsedTime] = useState(0);

  useEffect(() => {
    let animationFrame: number, timerStop: number, start: number;

    const onFrame = () => {
      setElapsedTime(Date.now() - start);
      loop();
    };

    const loop = () => {
      animationFrame = requestAnimationFrame(onFrame);
    };

    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        setElapsedTime(Date.now() - start);
      }, duration);

      start = Date.now();
      loop();
    };

    const timerDelay = setTimeout(onStart, delay);

    return () => {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, delay, reverse]);

  return reverse ? duration - elapsed : elapsed;
}
