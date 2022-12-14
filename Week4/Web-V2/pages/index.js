import Head from 'next/head'
import styled from 'styled-components'
import { Hero, Test, Wrapper } from '../styles/globals'
import Controls from 'components/Controls';
import Display from 'components/Display';
import 'semantic-ui-css/semantic.min.css';

import { useState }  from 'react';
import axios from 'axios';

const TopLayout = styled.div`
  position: fixed;
  bottom: 0;
`

export default function Home() {
  const GetFox = async () => {
    const result = await axios.get("https://randomfox.ca/floof/");
    console.log(result.data);
    setAnimalImg(result.data.image);
  }

  const [showCard, setShowCard] = useState(false);
  const [animalImg, setAnimalImg] = useState("https://placekitten.com/500/500");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        {/* testing styled components */}
        <Test>Hi</Test>
      </Hero>
      <Wrapper>
        <Display show={showCard} img={animalImg}/>
        <TopLayout>
          <Controls onButtonInteract={() => {
            setShowCard(true);
            GetFox();
        }}/>
        </TopLayout>
      </Wrapper>
    </div>
  )
};
