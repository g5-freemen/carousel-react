import React from 'react';
import Carousel from './components/Carousel';
import Item from './components/Item';
import './App.css';

export default function App() {

    return (
        <Carousel>
            <Item>
                <p className="photo">
                    <img
                        src="https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/03.jpg"
                        alt="Sunset photo" 
                    />
                </p>
                <span className="desc">Sunset</span>
            </Item>
            <Item>
                <iframe className="iframe" width="100%" height="70%"
                    src="https://www.youtube.com/embed/DGQwd1_dpuc" title="YouTube video player" 
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
                <p className="desc">Sea</p>
            </Item>
            <Item>
                <p className="photo">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
                        alt="Eifel Tower photo" 
                    />
                </p>
                <span className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </span>
            </Item>
            <Item>
                <p className="photo">
                    <img
                        src="https://img3.goodfon.ru/wallpaper/nbig/7/eb/seascape-sea-ocean-blue-beach.jpg"
                        alt="Sea photo" 
                    />
                </p>
                <span className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </span>
            </Item>
        </Carousel>
    )
}
