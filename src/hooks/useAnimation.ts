import useAnimationTimer from "./useAnimationTimer";

export default function useAnimation(
  easingName: EasingFunctions,
  duration: number,
  delay = 0,
  reverse = false
) {
  const elapsed = useAnimationTimer(duration, delay, reverse);
  const n = duration ? Math.max(Math.min(1, elapsed / duration), 0) : 0;
  return easing[easingName](n);
}

type EasingFunctions = "linear" | "easeInOutSine";

const easing = {
  linear: (n: number) => n,
  easeInOutSine: (n: number) => -(Math.cos(Math.PI * n) - 1) / 2,
} as {
  [key in EasingFunctions]: (n: number) => number;
};
