import { Child } from "./Child";

export const Parent = () => {
    console.log("Parent console")
  return (
    <div>
      <h3>Parent</h3>
      <Child />
    </div>
  );
};
