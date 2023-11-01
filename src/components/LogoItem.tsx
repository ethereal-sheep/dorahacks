import { twMerge } from "tailwind-merge";
import { useMemo } from "react";

type LogoItemProp = {
  visible?: boolean;
  size: number;
  top: number;
  left: number;
  src: string;
};

const LogoItem = ({ src, visible, size, top, left }: LogoItemProp) => {
  const transitionProperty = useMemo(() => {
    return visible
      ? "opacity-1 duration-500"
      : "opacity-0  translate-y-40 duration-0";
  }, [visible]);

  return (
    <img
      className={twMerge(
        `scale-100 md:scale-150 border rounded-md absolute p-1 transition-all ease-out `,
        transitionProperty
      )}
      style={{
        width: `${size}px`,
        minWidth: `${size}px`,
        height: `${size}px`,
        minHeight: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
      }}
      src={src}
    />
  );
};

export default LogoItem;
