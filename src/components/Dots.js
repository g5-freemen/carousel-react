import React, { useCallback, useEffect } from "react";

export default function Dots({ length, slideNum, setSlideNum }) {
  const drawDots = useCallback(
    () =>
      Array(length)
        .fill(0)
        .map((_, idx) => (
          <button
            key={`dot-${idx}`}
            className="dot"
            onClick={() => setSlideNum(idx)}
          />
        )),
    []
  );

  useEffect(() => {
    if (slideNum >= 0) {
      const dots = document.querySelectorAll(".dot");
      if (dots && dots.length) {
        dots.forEach((el) => el.classList.remove("active"));
        dots[slideNum].classList.add("active");
      }
    }
  }, [slideNum]);

  return <div className="slider-dots">{drawDots()}</div>;
}
