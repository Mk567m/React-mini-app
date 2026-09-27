import { useState } from 'react'
function Food(){
    
    const [food,setFood] = useState(['Apple','orange'])

    function Handlefood(){
        
        let input = document.getElementById('foodinput').value;
        document.getElementById('foodinput').value = '';
        input.length > 0 ? setFood([...food,input]) : window.alert('Cannot add empty fruit')

        }
        function Handledeletefood(index){
            setFood(prevfood => prevfood.filter((_,ind) => (ind !== index)))
            console.log(index)
            
        }


    return (
        <div>
            
            <ul>{food.map((fd,index)=> <li onClick={() => Handledeletefood(index)} key={index}>{fd}</li>)}</ul>

            <input type="text" placeholder='fruit name' id='foodinput' />
            <button onClick={Handlefood}>Add Food</button>

        </div>

    )


}
export default Food