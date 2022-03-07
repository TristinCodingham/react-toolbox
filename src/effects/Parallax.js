import React, { useState, useEffect } from 'react';

import Grid from '../layout/Grid';

import styled from 'styled-components';

import dudeWithTrumpet from '../../assets/dummy/dude-with-trumpet.jpg';
import mixer from '../../assets/dummy/mixer.jpg';
import recordPlayer from '../../assets/dummy/record-player.jpg';
import isInViewport from '../utils/isInViewport';

const images = [
    {src: dudeWithTrumpet, alt: "Parallax", index: -1},
    {src: mixer, alt: "Parallax", index: -2},
    {src: recordPlayer, alt: "Parallax", index: -3},
]

const BackgroundImage = styled.div`
background: url(${props => props.image});
background-size: cover;
background-position: center;
position: fixed;
top: 0;
height: 100vh;
width: 100vh;
z-index: ${props => props.index};
transform: translateY(${props => '-' + props.offset}px);
transition: 100ms linear;
`;

export default function Parallax() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset * 0.5);
        }
    }, [offset]);
    const backgroundImages = images.map(image => {
        return (
            <BackgroundImage className="parallax-image" key={image.index} image={image.src} index={image.index} offset={offset}>
                
            </BackgroundImage>
        )
    });
    return (
        <React.Fragment>
            <Grid flow="row">
                {backgroundImages}
            </Grid>
        </React.Fragment>
    )
}
