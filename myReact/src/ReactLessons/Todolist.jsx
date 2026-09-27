import { useEffect, useState } from "react"



function Todolist() {
    const [alltasks, setAlltasks] = useState(['Offer the Prayer','Eat breakfast','Go to Work'])
    const [newtask,setNewtask] = useState('')

    
    function Addtask(){
        //const maininput = document.getElementById('input').value
        //setNewtask(maininput)
        if (!newtask == ''){
            setAlltasks(prevNt => [...prevNt,newtask])
            setNewtask('')
        }
       
        else{
            window.alert('Cannot add Empty Task to the List')
        }
        
    }
    

    function DeleteTask(index){
        setAlltasks(alltasks.filter((_,ind)=> ind!==index))
    }
    function Movetaskup(index){
        if (index.length > 0){
            let updatedtasks = [...alltasks];
            console.log(updatedtasks)
            [updatedtasks[index], updatedtasks[index - 1]] =
             [updatedtasks[index - 1], updatedtasks[index]]
            setAlltasks(updatedtasks)
        }
    }
    function Movetaskdown(index){
        if (index < alltasks.length - 1 ){
            let updatedtasks = [...alltasks];
            [updatedtasks[index], updatedtasks[index + 1]] =
             [updatedtasks[index + 1], updatedtasks[index]]
            setAlltasks(updatedtasks)
        }
    }
    
    

    function handleinput(event){
        setNewtask(event.target.value)
    }

    return(
        <div className="to-do-list-container">
            <h2>Add a task (Array)</h2>
            <ol> {alltasks.map((element,index)=> <li id="list-items" key={index}>{element} 
                <button id="delete-task-btn" onClick={() => DeleteTask(index)}>Delete</button> 
                <button id="up-task-btn" onClick={() => Movetaskup(index)}>Move up</button>
                <button id="down-task-btn" onClick={() => Movetaskdown(index)}>Move Down</button></li>)}
            </ol>

                <input placeholder="Add a new Task" value={newtask} onChange={(event) => handleinput(event)} type="text" id="input" />
                <button id="task-btn" onClick={Addtask}>Add task</button>

        </div>
    )
}

export default Todolist;