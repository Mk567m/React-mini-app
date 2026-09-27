import { useContext } from "react"
import { namesContext } from "./CompA"

function CA5(){ 
    const mylove = useContext(namesContext)
   

    return (<div>

            <h2>Love U {mylove}</h2>
            
            </div>)
}

export default CA5