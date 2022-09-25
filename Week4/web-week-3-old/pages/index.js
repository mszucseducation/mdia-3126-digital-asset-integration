import Head from 'next/head'
import styled from  'styled-components';
import styles from 'styles/Home.module.css'

// Creating a styled-component
import { Hero, Test, Wrapper } from 'styles/globals';
import Controls from 'component/Controls';
import Display from 'component/Display';
import 'semantic-ui-css/semantic.min.css';

import { useState } from 'react';
import axios from 'axios';

const TopLayout = styled.div`
  position: fixed;
  bottom: 0;
`

export default function Home() {

  // https://randomfox.ca/floof/
  // Async is saying this will take time. So wait until it is over before you go on
  // await means wait for this to finish before moving on
  // .get() communicates with another server
  const GetFox = async () => {
    const result = await axios.get("https://randomfox.ca/floof/");
    console.log(result.data);
    setAnimalImg(result.data.image);
  }

  const [showCard, setShowCard] = useState(false);
  const [animalimg, setAnimalImg] = useState('https://placekitten.com/500/500');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
                {/*Testing Styled component */}
        <Test>Hello</Test>
      </Hero>
      <Wrapper>
        <Display show={showCard} img={animalimg}/>
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