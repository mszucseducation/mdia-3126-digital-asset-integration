import styled from "styled-components";

export const FlexCont = styled.View`
    display: flex;    
    justify-content: center;
    align-items: centers;
    flex-direction: row;
    background-color:${props=>props.color || "inherit"};
    padding: 10px;
`

export const Wrapper = styled(FlexCont)`
    // width: 100vw;
    // height: 100vh;
    flex{1};
    background:#FFFDFA;
`
