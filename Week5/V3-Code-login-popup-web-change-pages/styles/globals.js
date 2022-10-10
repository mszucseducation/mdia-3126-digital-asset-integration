import styled from "styled-components";

export const colos = {
    purple_bright: "#A1A6C5",
    purple_dark: "#495678",
    white_text: "#FFFFFF"
}

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.dir || "row"};
`

export const Wrapper = styled(FlexBox)`
    width: 100vw;
    height: 100vh;
`

