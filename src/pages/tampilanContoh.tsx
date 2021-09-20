import { useState } from "react";

const TampilanContoh = () => {
    const [count, setCount] = useState(0);

    const anto = {
        name: "anto",
        kanto: "LOVE",
    };

    const arto = {
        ...anto,
        name: "Arto",
    };

    const clickHandler = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1 style={{color: "#FFFFFF"}}>{arto.kanto}</h1>
            <h1 style={{color: "#FFFFFF"}}>{anto.kanto}</h1>
            <h1 style={{color: "#FFFFFF"}}>{count}</h1>
            <button onClick={clickHandler}>CLICK BUTTON</button>
        </div>
    )
}

export default TampilanContoh;