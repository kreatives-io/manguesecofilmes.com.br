import { useEffect, useState, useRef } from "react";

export default function useClickAway() {
  const [active, setActive] = useState(false);

  const ref = useRef(null);
  function toggle() {
    setActive(!active);
  }
  function handleClick(e: any) {
    if (!(ref.current as any)?.contains(e.target)) setActive(false);
  }

  useEffect(() => {
    if (active) document.addEventListener("mousedown", handleClick);
    else document.removeEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active]);
  return { ref, active, setActive, toggle };
}
