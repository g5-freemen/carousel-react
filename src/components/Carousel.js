import React, { useEffect, useState } from 'react';
import Dots from './Dots';
import PrevNext from './PrevNext';
import Auto from './Auto';
import { settings } from './_settings';
import './style.css';

export default function Carousel({children}) {
    const length = children.length;
    const [slideNum, setSlideNum] = useState(0);
    const [swipe, setSwipe] = useState(null);
    let { height, slidesToShow, showDots, spaceBetweenSlides, showAuto, autoInterval } = settings;

    function setCarousel() {
        const carousel = document.querySelector('.carousel');
        const width = carousel.clientWidth;
        const content = document.querySelector('.content');
        const slides = document.querySelectorAll('.item');
        const slideWidth =  (width - spaceBetweenSlides * (slidesToShow - 1)) / slidesToShow + 'px';
        if (slidesToShow > length) slidesToShow = length;
        if (slidesToShow < 1) slidesToShow = 1;

        slides.forEach(el => el.style.width = slideWidth);

        carousel.style.height = height;
        content.style.gridGap = spaceBetweenSlides + 'px';
    }

    function handleTouchStart(ev) {
        setSwipe({ x0: ev.touches[0].pageX });
    }
    
    function handleTouchMove(ev) {
        setSwipe({ ...swipe, x: ev.touches[0].pageX })
    }
    
    function handleTouchEnd(ev) {
        let diff = swipe.x0 - swipe.x;
        let newSlideNum = slideNum;

        if (Math.abs(diff) > window.innerWidth/14) {
            if (diff < 0) newSlideNum--
            else newSlideNum++;
        } 
        if (newSlideNum > length - 1) newSlideNum = length - 1
        else if (newSlideNum < 0) newSlideNum = 0;

        setSlideNum(newSlideNum)
    }

    useEffect(setCarousel, []);

    useEffect(() => {    
        window.addEventListener('resize', setCarousel)
    });

    useEffect(() => {
        const slides = document.querySelectorAll('.item');
        if (slides && slides.length) {
            slides[slideNum].scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
        };
    }, [slideNum]);

    return (
        <div className='wrapper'>
            <p className='title'>Carousel (React)</p>
            <div    className='carousel'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
            >
                <div className='content'>
                    {children}
                </div>
            </div>
            { slidesToShow !== length && length &&
                <PrevNext data={{length, slidesToShow, spaceBetweenSlides, slideNum, setSlideNum, }}/>
            }
            { slidesToShow !== length && length && showAuto &&
                <Auto data={{autoInterval, spaceBetweenSlides, setSlideNum}} /> }
            { slidesToShow !== length && length && showDots &&
                <Dots data={{length, slideNum, setSlideNum}} /> 
            }
            <div className='touch' />
            <a className="link" href="https://github.com/g5-freemen">
                Made by Anton Borkovskij, 2021
            </a>
        </div>
    )
}