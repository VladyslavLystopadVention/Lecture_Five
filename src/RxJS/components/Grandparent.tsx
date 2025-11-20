import { Parent } from "./Parent";
import { setDeepState, deepState$ } from "../local/DeepState";

export const GrandParent = () => {
    console.log("Grandparent console")
  return (
    <div>
      <h2>GrandParent</h2>
      <button onClick={() => setDeepState(!deepState$.value)}>
        Toggle Deep State
      </button>
      <Parent />
    </div>
  );
};
