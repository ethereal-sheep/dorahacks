import "./App.css";

import { useEffect, useRef, useState } from "react";

import Achievement from "./components/Achievement";
import useInView from "./hooks/useInView";

function App() {
  const [visible, setVisible] = useState(false);
  const showButtonText = visible ? "Hide" : "Show";
  const [tall, setTall] = useState(false);
  const tallButtonText = tall ? "Collapse" : "Expand";

  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <>
      <div className="p-4">
        <p className="font-bold text-xl mb-2">{`{ Debug }`}</p>
        <button
          className="bg-[#ff761c] rounded-md text-white font-semibold w-24 p-2 mr-1"
          onClick={() => setVisible((old) => !old)}
        >
          {showButtonText}
        </button>
        <button
          className="bg-[#ff761c] rounded-md text-white font-semibold w-24 p-2"
          onClick={() => {
            setVisible(false);
            setTall((old) => !old);
          }}
        >
          {tallButtonText}
        </button>
      </div>
      <div className={tall ? "h-screen" : "h-1"} />
      <div>
        <Achievement ref={ref} visible={visible} />
      </div>
    </>
  );
}

export default App;
