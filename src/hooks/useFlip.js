import { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  }

  return [state, toggleState];
}

export default useFlip;