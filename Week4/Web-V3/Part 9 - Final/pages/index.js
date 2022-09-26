import { Button, Loader } from 'semantic-ui-react';
import LoginForm from '../components/LoginForm';

// the router and states are modtly used in the 
// page fro data/information state management
// 3 states - Before, during and after
import { useRouter } from'next/router';
import { useState } from 'react';

// focus on where I am going to on this page
// this all happens in the page  no tthe component
export default function Home() {

  const r = useRouter();

  // before, during, after
  const [loginState, setLoginState] = useState("before");
  

  // const HandleButton = () => {
  //     if(loginState === "before") {
  //       setLoginState("during")
  //     }
  //     if(loginState === "during") {
  //       setLoginState("after")
  //     }
  //     if(loginState === "after") {
  //       r.push("/dashboard")
  //     }
  // }

  const Login = async () => {
    setLoginState("during");
    // it's going to take time to talk to an "endpoint" to see if 
    // your user credentials are legit
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
      {/* <Button color={c} onClick={()=>Login()}>{button_next}
        {loginState ==="during" && <Loader active/>}
      </Button> */}
      <LoginForm loginState={loginState}
      onLoginClick={()=>Login()}
      />
    </div>
  )
}
