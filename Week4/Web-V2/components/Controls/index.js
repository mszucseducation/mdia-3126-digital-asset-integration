import React from "react";
import styled from "styled-components";
import { Button } from 'semantic-ui-react';

const CtrlCont = styled.div`
    display: flex;
    min-width: ${props => props.mw};
    width: ${props => props.width};
    justify-content: center;
`

const Controls = ({
    widthPercent="100%",
    min = "200px",
    onButtonInteract = () => {}
}) => {
    return <CtrlCont width={widthPercent} mw={min}>
        <Button onClick={() => {
            onButtonInteract();
        }}content="Get all data" primary/>
        <Button onClick={()=> {
            onButtonInteract();
        }}content="get 1 data" secondary/>

    </CtrlCont>
}

export default Controls;