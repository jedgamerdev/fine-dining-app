import { useRef, useState } from "react";

// interface DemoProps {}

const Sample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 2);
    countRef.current++;

    console.log("Count:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div>
      Count: {countRef.current}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Sample;
