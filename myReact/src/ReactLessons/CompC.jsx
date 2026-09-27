import CA4 from "./cod"
import {namesContext} from './CompA'
import { useContext } from "react"


function CA3(){

    const pookie = useContext(namesContext)

    return (<div>
        
        <h3>Te Que Ro {pookie}</h3> 

                <CA4 />
        
        
    </div>)
}
export default CA3