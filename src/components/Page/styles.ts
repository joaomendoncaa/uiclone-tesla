import styled from 'styled-components';

import bg1 from '../../assets/backgrounds/bg-main-model-y-min.jpg'
import bg2 from '../../assets/backgrounds/bg-main-model-x-min.jpg'
import bg3 from '../../assets/backgrounds/bg-main-model-3-min.jpg'
import bg4 from '../../assets/backgrounds/bg-main-model-s-min.jpg'
import bg5 from '../../assets/backgrounds/bg-main-panels-min.jpg'
import bg6 from '../../assets/backgrounds/bg-main-accessories-min.jpg'

export const Container = styled.div`
    .colorized-div:nth-child(1) {
        background-image: url(${bg1});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .colorized-div:nth-child(2) {
        background-image: url(${bg2});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .colorized-div:nth-child(3) {
        background-image: url(${bg3});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .colorized-div:nth-child(4) {
        background-image: url(${bg4});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .colorized-div:nth-child(5) {
        background-image: url(${bg5});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }

    .colorized-div:nth-child(6) {
        background-image: url(${bg6});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }
    
    .colorized-div:nth-child(7) {
        background: #ffffff;
    }
`

export const Spacer = styled.div`
    height: 15vh;
    background: #FFCFFD;
`


