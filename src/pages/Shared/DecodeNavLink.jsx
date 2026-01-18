import { NavLink } from "react-router";
import { useRef } from "react";

const DecodeNavLink = ({ to, text }) => {
  const ref = useRef(null);
  const intervalRef = useRef(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleHover = () => {
    if (!ref.current) return;

    clearInterval(intervalRef.current);

    let iteration = 0;
    const original = ref.current.dataset.original;

    intervalRef.current = setInterval(() => {
      if (!ref.current) {
        clearInterval(intervalRef.current);
        return;
      }

      ref.current.textContent = original
        .split("")
        .map((char, index) =>
          index < iteration
            ? char
            : letters[Math.floor(Math.random() * letters.length)]
        )
        .join("");

      iteration += 1 / 3;

      if (iteration >= original.length) {
        ref.current.textContent = original;
        clearInterval(intervalRef.current);
      }
    }, 30);
  };

  return (
    <NavLink to={to}>
      <span ref={ref} data-original={text} onMouseEnter={handleHover}>{text}</span>
    </NavLink>
  );
};

export default DecodeNavLink;
