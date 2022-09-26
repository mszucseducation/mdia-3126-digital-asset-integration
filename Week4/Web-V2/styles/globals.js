import styled from "styled-components";

export const Hero = styled.div`
    background-color: beige;
    text-align: center
`

export const Test = styled.h1`
    font-size: 40px;
    color: blue;
`

export const FlexCont = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || "inherit"};
    padding: 10px;
    height: 10px;
`

export const Wrapper = styled(FlexCont)`
    width: 100vw;
    height 100%;
    background: #FFFDFA;
`