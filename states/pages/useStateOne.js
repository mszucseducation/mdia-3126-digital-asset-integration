import { useState } from "react";

export default function useStateOne() {
    const [number, setNumber] = useState(0);

    const HandleButton = () => {
        number++;
        setNumber(number);
        console.log(number);
    }

    return (
        <div>
            <button onClick={HandleButton}>Incrementing</button>
            {number}
        </div>
    )
}
