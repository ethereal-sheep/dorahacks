import LogoItem from "./LogoItem";
import { twMerge } from "tailwind-merge";
import useTimedVisibles from "../hooks/useTimedVisibles";

type LogosProps = {
  visible?: boolean;
  className?: string;
};

export const Logos = ({ visible, className }: LogosProps) => {
  const [v0, v1, v2, v3, v4, v5, v6, v7] = useTimedVisibles(
    visible,
    visible ? 100 : 0
  );

  return (
    <div className={twMerge("flex flex-1 items-center", className)}>
      <div className={"h-[100px] relative ml-12 w-[320px] md:w-[500px] "}>
        <LogoItem
          size={40}
          top={12}
          left={0}
          visible={v0}
          src={"/b1cefbd7.svg"}
        />
        <LogoItem
          size={40}
          top={25}
          left={15}
          visible={v1}
          src={"/cosmos.png"}
        />
        <LogoItem
          size={45}
          top={6}
          left={30}
          visible={v2}
          src={"/d8f74907.svg"}
        />
        <LogoItem
          size={30}
          top={-10}
          left={50}
          visible={v3}
          src={"/a7a03cd4.svg"}
        />
        <LogoItem
          size={42}
          top={50}
          left={55}
          visible={v4}
          src={"/yellowcube.svg"}
        />
        <LogoItem size={40} top={20} left={70} visible={v5} src={"/f.png"} />
        <LogoItem
          size={30}
          top={45}
          left={83}
          visible={v6}
          src={"/4b8b7e8c.svg"}
        />
        <LogoItem
          size={30}
          top={-3}
          left={89}
          visible={v7}
          src={"/solana.svg"}
        />
      </div>
    </div>
  );
};
