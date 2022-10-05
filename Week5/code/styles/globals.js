import styled from 'styled-components';

export const colors = {
  purp_bright:"#A1A6C5",
  purp_dark:"#495678",
  white_text:"#FFFFFF"
}

//let the user choose column or row
export const FlexBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:${props=>props.dir || "row"};
`

//Reusuable Wrapper for all the pages
export const Wrapper = styled(FlexBox)`
width:100vw;
height:100vh;
`