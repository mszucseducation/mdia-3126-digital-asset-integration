import styled from "styled-components"

export default function AppText({
  txt='Welcome',
  size='18px'
}){

  return (
    <TxtCont sz={size}>
      {txt}
    </TxtCont>
  )
}

const TxtCont = styled.div`
font-size:${props=>props.sz};
`;