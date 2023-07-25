import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

//new Splide('.splide').mount( { AutoScroll } );

export default () => {
    return (
        <Splide autoStart="true" aria-label="My Favorite Images">
            <SplideSlide>
                <img src="/img/java logo.png"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/img/pythonlogo.png"/>
            </SplideSlide>
        </Splide>
    );
}
