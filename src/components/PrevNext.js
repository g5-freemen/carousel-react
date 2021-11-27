import React from "react";

export default function PrevNext(props) {
  const { length, slidesToShow, slideNum, setSlideNum } = props;

  function handleBtnClick(reverse) {
    let newSlideNum = slideNum + slidesToShow * reverse;
    if (newSlideNum < 0) newSlideNum = 0;
    if (newSlideNum > length - 1) newSlideNum = length - 1;

    setSlideNum(newSlideNum);
  }

  return (
    <div>
      <button className="prev-btn" onClick={() => handleBtnClick(-1)}>
        🡄
      </button>
      <button className="next-btn" onClick={() => handleBtnClick(1)}>
        🡆
      </button>
    </div>
  );
}
