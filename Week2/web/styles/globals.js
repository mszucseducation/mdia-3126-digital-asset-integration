import styled from "styled-components";

export const FlexCont = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    background-color:${props=>props.color || "inherit"};
    padding: 10px;
    height: 10px;
`

export const Wrapper = styled(FlexCont)`
    width: 100vw;
    height: 100vh;
    background:#FFFDFA;
`
