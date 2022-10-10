import { Wrapper } from "../styles/globals";
import Popup from "../components/Popup";
import PopupPageIndicator from "../components/PopupPageIndicator";
import { useState } from "react";
import PopupPageIconIndicator from "../components/PopupPageIconIndicator";
import { useRouter } from 'next/router';
import Menu from "../components/Menu";

export default function Home() {
  const r = useRouter();
  const [steps, setSteps] = useState(1);

  const HandleSteps = (new_step) => {
    if(new_step > 4) {
      r.push("./Login")
    } else {
      setSteps(new_step);
    }
  }
  return (
    <Wrapper dir="column">
      <Popup
        stepnum={steps}
        // Just skip to login when closed
        onClose={()=>HandleSteps(5)}
        onNext={()=>HandleSteps(steps+1)}
        onPrev={()=>HandleSteps(steps-1)}
      />
      <PopupPageIconIndicator stepnum={steps}/>
    </Wrapper>
  )
}
