import {useState} from "react";

export default function UseStateThree() {
    const [color, changeColor] = useState("gray");
    return(
        <div>
            <button onClick={() => changeColor("red")}>Change to red</button>
            <button onClick={() => changeColor("blue")}>Change to blue</button>

            <h1 style={{ color }}>Change the text color</h1>
            <div style={{ backgroundColor: `${color}`, inlineHeight: 10, padding: 20}}>Box</div>
        </div>
    )
}