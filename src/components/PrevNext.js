import React from 'react';

export default function PrevNext(props) {
    const {length, slidesToShow, slideNum, setSlideNum } = props.data;

    function handleBtnClick(ev, reverse) {
        let newSlideNum = slideNum + slidesToShow * reverse;
        if (newSlideNum < 0) newSlideNum = 0;
        if (newSlideNum > length-1) newSlideNum = length-1;

        setSlideNum(newSlideNum);
    }

    return (
        <React.Fragment>
            <button className='prev-btn' onClick={ev => handleBtnClick(ev, -1)}>
                &#10094;
            </button>
            <button className='next-btn' onClick={ev => handleBtnClick(ev, 1)}>
                &#10095;
            </button>
        </React.Fragment>
    )
}