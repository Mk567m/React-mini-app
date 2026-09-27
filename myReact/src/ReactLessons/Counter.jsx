import React, {use, useEffect, useState} from "react";

function Counterprogram() {

    const [count, SetCount] = useState(0)
    const [color,setColor] = useState()
    const [height,setHeight] = useState(window.innerHeight);
    const [width,setWidth] = useState(window.innerWidth)
 
    const Increase = () => {
        SetCount(prevcount => prevcount + 1)
        
    }
    const Decrease = () => {
        
        SetCount(prevcount => prevcount - 1)
    }
    const Reset = () => {
        SetCount(prevcount => prevcount = 0)

    }
    function ChangeColor(){
        setColor(pcolor=> pcolor === 'green' ? 'red':'green')
    }
    
    function Handleresize2(){
        document.title = `Size: ${width} x ${height}`
    }
    
    useEffect(() => {
        window.addEventListener('resize',Handleresize2)
    },[])
    useEffect(()  =>  {
        return () => {window.removeEventListener('resize', Handleresize2)

        }
    })
    return(
        <div className="counter-container">
            <p>{height}px {width}px</p>
        <br></br>

            <p id="count-time" style={{color:color}}>{count} </p>

            <span><button id="decreasebtn" onClick={Decrease} >Decrease </button>
            <button id="resetbtn" onClick={Reset}>Reset</button>
            <button id="increasebtn" onClick={Increase}>Increase</button>
            <button id="increasebtn" onClick={ChangeColor}>Change Color</button></span>
            



        </div>
    )

}
export default Counterprogram


