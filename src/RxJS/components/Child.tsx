import { useEffect } from "react";
import { getDeepState } from "../local/DeepState";

export const Child = () => {
  useEffect(() => {
    const sub = getDeepState().subscribe(value => {
      console.log("Child render, deepState =", value);
    });
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      <p>Child component (check console)</p>
    </div>
  );
};
