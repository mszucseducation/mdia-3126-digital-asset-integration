import Head from 'next/head'
import Image from 'next/image'

import styled from 'styled-components'

import { FlexCont, Wrapper } from '../styles/globals';


export default function Home() {
  return (
    <Wrapper>
      hi
      <FlexCont color="beige">
        My name is Monika
      </FlexCont>
    </Wrapper>
  )
}
