import Head from 'next/head'
import Image from 'next/image'

import styled from 'styled-components'

import { FlexCont, Wrapper } from '../styles/globals';
import ButtonArea from '../components/Button';



export default function Home() {
  return (
    <Wrapper>
      hi
      <FlexCont color="beige">
        <ButtonArea name={"Monika"}/>
      </FlexCont>
    </Wrapper>
  )
}
