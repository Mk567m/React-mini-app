import { useState } from "react"


function Carobjects() {
    const [cars,setCars] = useState([{year:2021, make:'Ford',model:'Mustang'}])
    const [year,setYear] = useState(new Date().getFullYear())
    const [make,setMake] = useState('')
    const [model,setModel] = useState('')

    function AddCar(){
        const newcarobject = {year:year,make:make,model:model}
        setCars(prevcars => [...prevcars,newcarobject]);
        setYear(new Date().getFullYear())
        setMake('')
        setModel('')
        
        
    }
    function Deleteobj(index){
      
        setCars(prevc => prevc.filter((_,ind)=> ind !== index))
        
        
    }


    function Handleyear(event){
        setYear(event.target.value)
    }
    function Handlemake(event){
        setMake(event.target.value)
    }
    function Handlemodel(event){
        setModel(event.target.value)
    }


    return (
        <div className="car-container-card">
            <h2>Add a Car (Object)</h2>
            <ul>
                {cars.map((element,index) => <li onClick={() => Deleteobj(index)} key={index}>{element.year} {element.make} {element.model}</li>)  }
            </ul>

            <input type="number"  value={year} onChange={Handleyear}   id="car-year" />
            <input type="text" placeholder="Enter the Car Make"  onChange={Handlemake}  value={make}   id="car-make" />'
            <input type="text" placeholder="Enter the Car Model" onChange={Handlemodel}   value={model}  id="car-model" />'

            <button id="carbutton" onClick={AddCar}>Add Car</button>
        </div>
    )
}
export default Carobjects