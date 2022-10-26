import { useState } from "react";

export default function useStateTwo() {
    const [number, setNumber] = useState(0);

    const HandleButton = () => {
        number++;
        setNumber(number);
        alert(number);
        console.log(number);
    }

    return (
        <div>
            <button onClick={HandleButton}>Increment</button>
            <button onClick={() => {
                setNumber(0)
                console.clear()
            }}>Reset</button>
            {number}
        </div>
    )
}