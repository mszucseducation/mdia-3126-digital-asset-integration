import {useState} from "react";

export default function UseStateFour() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => {
                setNumber(number + 1)
                console.log(number)
            }}>
                Add number
            </button>

            {
                number > 1 && <div style={{
                        backgroundColor: "red", 
                        lineHeight: 10, 
                        padding: 20
                    }}>
                        Box
                </div>
            }
        </div>
    )
}