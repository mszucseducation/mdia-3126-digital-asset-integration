import { useState } from 'react';

export default function UseStateFive() {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray")

    const HandleChange = () => {
        if(number == 2) {
            setColor("orange")
        }
    }

    return (
        <div>
            <button onClick={() => {
                    console.log(number)
                    setNumber(number + 1)
                    HandleChange()
                    console.log(number)
                }}>
                    Add number
                </button>
            <h1 style={{ color }}>Change the text color</h1>

            {
                number > 1 && <div 
                    style={{
                        backgroundColor: `${color}`,
                        lineHeight: 10,
                        padding: 20
                    }}>
                        Box
                </div>
            }
        </div>
    )
}