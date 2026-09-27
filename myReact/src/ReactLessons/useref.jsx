import { useEffect, useRef,us, useState, use } from "react"


function useLocalStorage(key,initialValue){
    
   
    const [value,setValue] = useState(() => {
    try{
        const saved = localStorage.getItem(key);
        return saved? JSON.parse(saved) : initialValue}
    catch{
        return initialValue
    }    
    
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]


    
}
export default useLocalStorage
