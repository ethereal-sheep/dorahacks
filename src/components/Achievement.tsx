import { forwardRef, useState } from "react";

import { Logos } from "./Logos";
import Slogan from "./Slogan";
import StatItem from "./StatItem";
import StatSeparator from "./StatSeparator";
import useTimedVisibles from "../hooks/useTimedVisibles";

export type AchievementProps = {
  visible?: boolean;
};

const Achievement = forwardRef<HTMLDivElement, AchievementProps>(
  ({ visible }: AchievementProps, ref) => {
    const [v0, v1, v2, v3] = useTimedVisibles(visible, visible ? 500 : 0);
    const [sloganTrigger, setSloganTrigger] = useState(false);

    return (
      <>
        <div
          ref={ref}
          className="flex flex-1 items-center justify-center px-[1px] md:px-20 md:relative md:top-16"
        >
          <div className="flex flex-1 flex-row shadow bg-white py-8 px-12 rounded-t-lg md:rounded-b-lg md:min-w-[700px]">
            <div className="flex flex-wrap md:flex-row flex-1">
              <StatItem
                label={"Funded"}
                money
                value={29_330_000}
                visible={v0}
                valueClassName="w-[150px] lg:w-[180px]"
              />
              <StatSeparator />
              <StatItem
                label={"Community Contributions"}
                money
                value={8_880_000}
                visible={v1}
                valueClassName="w-[110px] lg:w-[180px]"
              />
              <StatSeparator />
              <StatItem
                label={"BUIDLS"}
                value={7_658}
                visible={v2}
                valueClassName="w-[70px] lg:w-[110px]"
              />
              <StatSeparator />
              <StatItem
                label={"Active Builders"}
                value={102_111}
                valueClassName="w-[100px] lg:w-[140px]"
                visible={v3}
              />
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setSloganTrigger(true);
          }}
          className="-z-10"
        >
          <div className="overflow-hidden bg-gradient-to-t from-orange-600 via-yellow-500 to-90% rounded-b-lg md:rounded-t-lg px-[1px] pb-[1px]">
            <div className="bg-[url('/world.jpeg')] md:pt-20 h-[200px] md:h-[300px] bg-no-repeat bg-cover overflow-hidden md:flex rounded-b-lg">
              <Slogan
                triggered={sloganTrigger}
                onAnimationComplete={() => setSloganTrigger(false)}
              />
              <Logos visible={visible} />
            </div>
          </div>
          <div className="flex flex-1 w-full justify-center relative top-[-1px]">
            <div className="absolute bg-white h-1 w-9" />
            <div className="relative rounded-tr-full border-r-[1px] border-t-[1px] border-orange-600 h-12 w-5 left-[1px]" />
            <div className="relative rounded-tl-full border-l-[1px] border-t-[1px] border-orange-600 h-12 w-5" />
          </div>
        </div>
      </>
    );
  }
);

export default Achievement;
