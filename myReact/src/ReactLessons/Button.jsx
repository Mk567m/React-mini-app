import useLocalStorage from './useref.jsx'
function Mybutton(){
   
    const [name,setName] = useLocalStorage('Mustafa','');

    return (<div>

            <input type="text" value={name} onChange={(ev)=> setName(ev.target.value)} />

           </div>)

        
 
    

}

export default Mybutton