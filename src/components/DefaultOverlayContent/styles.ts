import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

export const Heading = styled.div`
    margin-top: 16.5vh;
    text-align: center;

    > h1 {
        font-weight: 700;
        letter-spacing: .2rem;
        font-size: 50px;
        line-height: 48px;
        color: #000;
    }
    
    > h2 {
        font-weight: normal;
        margin-top: 15px;
        font-size: 16px;
        line-height: 20px;
        color: rgba(0,0,0,.5);
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 130px;

    > button {
        background: #1a1720;
        color: #fff;
        opacity: 1;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.white {
            background: #fff;
            color: #1a1720;
            font-weight: 700;
            opacity: .8;
        }

        & + button {
            margin: 10px 0 0;

        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 90px;

        > button + button {
            margin: 0 0 0 10px;
        }
    }
`
