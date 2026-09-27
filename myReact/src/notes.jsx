import { useEffect, useState } from "react";

function Todoapp(){
    const [alltasks,setAlltasks] = useState(['Ablution for Prayer','Ablution for Prayer 2', 'Ablution for Prayer 3', 'Ablution for Prayer 4'])
    const [newtask,setNewtask] = useState()
    
    

    function Addnote(){
        const new_task_input = document.getElementById('addinput').value
        

            if (new_task_input.length < 8  || new_task_input == ""){
                document.getElementById('error-msg').textContent = 'Task is Too short'
            }
            else{
                setAlltasks(ptask => [...ptask, new_task_input])
                document.getElementById('addinput').value = ''
                document.getElementById('error-msg').textContent = 'task added!'
                document.getElementById('error-msg').style.color = 'aliceblue'
                
            }
           
    }
    function Deletetask(index){
        setAlltasks(prevtasks => prevtasks.filter((_,ind) => ind !== index))
    }
    
    // EDIT FUNCTIONALITY
    const [editid,setEditid] = useState(null)
    const [editText,setEditText] = useState()

    function Edittask(id,text){
        
        setEditid(id);
        setEditText(text)
    }
    function SaveTask(id){
        
        setAlltasks(alltasks.map((default_text,i) => i === id ?  editText : default_text));
        setEditid(null)
       
    }
    useEffect(()=>{
            console.log(editText)
        },[Edittask])
    


    /*function Handlesearch(){
        const alpha = document.getElementById('filter-alpha')
        const bigger = document.getElementById('filter-bigger')
 <select name="" id="">
                <option value="filter-alpha">Filter by Alphabetical order</option>
                <option value="filter-bigger">Filter by Bigger task</option>
                </select>     <button onClick={Handlesearch}>search</button>
        if (alpha){
            setAlltasks(prevtasks => prevtasks.filter((_,index) => {prevtasks.sort}))
        }
    }*/



    /* function handleinput(e){
        setNewtask(e.target.value)
     }*/


    return (

    <div className="master-card">
        <br />
        <div className="note-card">
            <h2 style={{color:"white"}}>Welcome To my Notes App</h2>
        
            <main className="notes-content">
               
                <label id="addlabel">Add a Note</label>
                <input  type="text"  id="addinput" />
                <button onClick={Addnote} id="add-note-btn">Add note</button>
                <p id="error-msg">.</p>
            
                
            </main>
        <br />
        <div className="notes-items">


            {alltasks.map((element,index) => index === editid ? <> <input className="editinput" value={editText} onChange={(e) => setEditText(e.target.value)}/>  
                                                                    <button className="save-btn" onClick={() => SaveTask(index)}>Save Task</button>    
                                                                </>
            : <>
            
            
                <li className="list-item"><span>{element}</span>  <button className="edit-btn" onClick={() => Edittask(index,element)}>Edit Task</button>
                <button className="delete-btn" onClick={() => Deletetask(index)}>Delete Task</button></li>
                

            </>         )
            
            }

            
          
                </div>
            
        </div>    

    </div>

    )
}

export default Todoapp
