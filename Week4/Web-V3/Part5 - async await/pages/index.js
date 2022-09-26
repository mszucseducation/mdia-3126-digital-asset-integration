import { Button, Loader } from 'semantic-ui-react';

// the router and states are modtly used in the 
// page fro data/information state management
// 3 states - Before, during and after
import { useRouter } from'next/router';
import { useState } from 'react';


export default function Home() {

  // before, during, after
  const [loginState, setLoginState] = useState("before");
  var c = "blue";

  const r = useRouter();
  var button_next="click me start";

  if(loginState === "before") {
    c = "blue"
  } 
  
  if(loginState === "during") {
    c = "green"
    button_next="loading";
  }

  if(loginState === "after") {
    c = "grey"
    button_next="logged in";
  }

  const HandleButton = () => {
      if(loginState === "before") {
        setLoginState("during")
      }
      if(loginState === "during") {
        setLoginState("after")
      }
      if(loginState === "after") {
        r.push("/dashboard")
      }
  }

  const Login = async () => {
    setLoginState("during");
    // it's going to take time
    //mock of the time passing. It doesn't do amything
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoginState("after");

    //its going to stall for 1 to 2 seconds
    //mock of the time passing. It doesn't do amything
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    r.push("/dashboard");
  }
  return (
    <div >
      <Button color={c} onClick={()=>Login()}>{button_next}
        {loginState ==="during" && <Loader active/>}
      </Button>
    </div>
  )
}
