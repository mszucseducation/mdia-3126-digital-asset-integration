import {Wrapper} from '../styles/globals';
import Bubble from '../comps/Bubble';
import Dots from '../comps/Dots';

import { useState } from 'react';
import {useRouter} from 'next/router';


export default function Home() {

  const r = useRouter();
  const [steps, setStep] = useState(1);

  const HandleSteps = (new_step) =>{
    if(new_step > 4){
      r.push("/login");
    } else {
      setStep(new_step)
    }
  }

  return (
    <Wrapper dir="column">
      <Bubble 
        stepnum={steps}
        // Just skip to login when closed 
        onClose={()=>HandleSteps(5)}
        onNext={()=>HandleSteps(steps+1)} 
        onPrev={()=>HandleSteps(steps-1)}
      />
      <Dots stepnum={steps}/>
    </Wrapper>
  )
}
