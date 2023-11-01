import { twMerge } from "tailwind-merge";
import useAnimation from "../hooks/useAnimation";
import { useEffect } from "react";

type SloganProps = {
  triggered?: boolean;
  onAnimationComplete?: () => void;
};

const Slogan = ({ triggered, onAnimationComplete }: SloganProps) => {
  const interpolate = useAnimation("easeInOutSine", triggered ? 800 : 0, 0);
  console.log(interpolate);
  useEffect(() => {
    if (interpolate == 1) {
      onAnimationComplete && onAnimationComplete();
    }
  }, [interpolate, onAnimationComplete]);

  useEffect(() => {}, [interpolate]);

  const bgx = interpolate * -200 + 100;

  return (
    <p
      className={twMerge(
        "max-w-xl min-w-[560px] mb-5 text-left text-xl sm:text-2xl md:text-3xl font-semibold pt-10 px-10 md:pl-20 relative"
      )}
    >
      Build with the best ecosystems <br></br>on {""}
      <span
        style={{
          backgroundImage:
            "linear-gradient(100deg,#7f4ec7 11.46%,#5594f1 42.58%,#58de98 50%,#5594f1 57.42%,#7f4ec7 88.54%)",
          backgroundSize: "200% 100%",
          backgroundPositionX: `${bgx}%`,
        }}
        className={"text-transparent bg-clip-text bg-w-200 bg-x-100"}
      >
        DoraHacks
      </span>
    </p>
  );
};

export default Slogan;
