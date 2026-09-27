import React,{ useState } from "react"


function Writetext() {

    const [text,setText] = useState()

    const Updateshipping = (event) => {
        setText(event.target.value)
    }
    const [color,setColor] = useState('white')

    const UpdateColor = (event) => {
        setColor(event.target.value)
    }

    
    

    return( <div>

        <label >
            <input type="radio" value="Delivery" checked={text === "Delivery"} onChange={Updateshipping}   name="deliver" />
            Delivery
        </label>
        <br />
        <label >
            <input type="radio" value="Pick up" checked={text === "Pick up"} onChange={Updateshipping}   name="deliver" />
            Pickup
        </label>    

        <p onChange={Updateshipping}>Shipping method: {text} </p>
        <div className="color-card">
        <div className="color-container" style={{backgroundColor:color}}>
            current color: {color}
        </div>
        <h3>Select color</h3><input type="color" value={color} onChange={UpdateColor} />

        </div>


            </div>
            
        
        )
}
export default Writetext