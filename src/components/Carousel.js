import React, { useEffect, useState } from 'react';
import Dots from './Dots';
import PrevNext from './PrevNext';
import Auto from './Auto';
import { settings } from './_settings';
import './style.css';

export default function Carousel({children}) {
    const length = children.length;
    const [slideNum, setSlideNum] = useState(0);
    let { height, slidesToShow, showDots, spaceBetweenSlides, showAuto, autoInterval } = settings;
    let touchPoint;

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
        touchPoint.style.left = ev.touches[0].pageX + 'px';
        touchPoint.style.top = ev.touches[0].pageY + 'px';
        touchPoint.style.display = 'flex';
    }
    
    function handleTouchMove(ev) {
        touchPoint.style.left = ev.touches[0].pageX  + 'px';
        touchPoint.style.top = ev.touches[0].pageY + 'px';
    }
    
    function handleTouchEnd(ev) {
        let item = ev.target.closest('.item');
        if (item) item.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'})
        else console.log('miss');
        touchPoint.style.display = 'none';
    }

    useEffect(() => {
        touchPoint = document.querySelector('.touch');
        setCarousel()
    }, []);

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