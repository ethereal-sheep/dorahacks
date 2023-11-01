import { useEffect, useState } from "react";

export default function useTimedVisibles(visible = false, interval = 250) {
  const [v0, setV0] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [v5, setV5] = useState(false);
  const [v6, setV6] = useState(false);
  const [v7, setV7] = useState(false);

  useEffect(() => {
    const id0 = setTimeout(() => setV0(visible), 0);
    const id1 = setTimeout(() => setV1(visible), interval);
    const id2 = setTimeout(() => setV2(visible), interval * 2);
    const id3 = setTimeout(() => setV3(visible), interval * 3);
    const id4 = setTimeout(() => setV4(visible), interval * 4);
    const id5 = setTimeout(() => setV5(visible), interval * 5);
    const id6 = setTimeout(() => setV6(visible), interval * 6);
    const id7 = setTimeout(() => setV7(visible), interval * 7);

    return () => {
      clearTimeout(id0);
      clearTimeout(id1);
      clearTimeout(id2);
      clearTimeout(id3);
      clearTimeout(id4);
      clearTimeout(id5);
      clearTimeout(id6);
      clearTimeout(id7);
    };
  }, [visible, interval]);

  return [v0, v1, v2, v3, v4, v5, v6, v7];
}
