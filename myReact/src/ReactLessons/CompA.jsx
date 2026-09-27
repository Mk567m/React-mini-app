import CA2 from "./CompB"
import { createContext } from "react"

export const namesContext = createContext()

const mypookie = "Zuhra"

function CA(){
    
    

    return (<div>
            
            
                <h3>Hi {mypookie}</h3>
                
            <namesContext.Provider value={mypookie} >
            <CA2 />
            </namesContext.Provider> 
            
            
           
            </div>)
}

export default CA