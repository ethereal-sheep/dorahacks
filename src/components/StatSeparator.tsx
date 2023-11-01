import { twMerge } from "tailwind-merge";

type StatSeparatorProps = {
  className?: string;
};

const StatSeparator = ({ className }: StatSeparatorProps) => {
  return (
    <div
      className={twMerge(
        "hidden md:flex flex-1 h-full items-center",
        className
      )}
    >
      <hr className="w-[2px] h-[25px] mx-auto bg-gray-100 border-0 rounded " />
    </div>
  );
};

export default StatSeparator;
