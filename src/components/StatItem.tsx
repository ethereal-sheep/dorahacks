import { formatStatValue } from "../util/format";
import { twMerge } from "tailwind-merge";
import useAnimation from "../hooks/useAnimation";
import { useMemo } from "react";

export type StatItemProps = {
  visible?: boolean;
  value?: number;
  label?: string;
  money?: boolean;
  className?: string;
  valueClassName?: string;
};

const StatItem = ({
  visible,
  className,
  valueClassName,
  value = 0,
  label = "Funded",
  money,
}: StatItemProps) => {
  const interpolate = useAnimation("linear", 1000, 0, !visible);
  const { valueText, unit } = formatStatValue(value * interpolate, money);

  const valueTextClass =
    "text-left text-2xl lg:text-4xl font-bold " +
    (money ? "text-green-500 " : "text-orange-500 ");

  const valueTransitionProperty = useMemo(() => {
    return visible ? "max-h-16  duration-500" : "max-h-0 duration-0";
  }, [visible]);

  const valueBaseClass = `w- transition-all ease-in-out relative`;

  const actualValueClassName = twMerge(
    valueClassName,
    valueTextClass,
    valueBaseClass,
    valueTransitionProperty
  );

  const unitTransitionProperty = useMemo(() => {
    const cn = visible
      ? "opacity-1 duration-200 delay-1000"
      : "opacity-0 duration-0";
    return cn;
  }, [visible]);

  const unitBaseClass = "transition-all ease relative";
  const actualUnitClassName = twMerge(unitBaseClass, unitTransitionProperty);

  return (
    <div
      className={twMerge(
        "flex w-full sm:w-[50%] md:w-auto py-1 h-20",
        className
      )}
    >
      <div className="flex flex-col self-center overflow-hidden">
        <h3 className="text-left text-sm lg:text-xl font-semibold">{label}</h3>
        <p className={actualValueClassName}>
          {money && <span className={actualUnitClassName}>$</span>} {valueText}{" "}
          {money && <span className={actualUnitClassName}>{unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default StatItem;
