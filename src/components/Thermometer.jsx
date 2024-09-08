import { useState } from "react";


export function Thermometer(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(false)

    function handlePlus(){
        setCount(count + 1);
        if(count >= 0){
            setColor(true);
        }
    }
    function handleMinus(){
       setCount(count - 1);
       if(count <= 0){
            setColor(false)
       }
    }
    
    return (
        <>
            <h1>Thermometer</h1>
            <div className="boxContainer">
                {!color ? <div className="circleContainer" style={{backgroundColor:"blue"}}>{count} C</div> : <div className="circleContainer" style={{backgroundColor:"red"}}>{count} C</div>}
            </div>
            <div className="btnContainer">
                <button className="btnRed" onClick={handlePlus}>+</button>
                <button className="btnBlue" onClick={handleMinus}>-</button>
            </div>
        </>
    );
}