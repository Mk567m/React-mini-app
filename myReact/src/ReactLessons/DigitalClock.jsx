import {useEffect, useState} from 'react'

function DIGITALCLOCK(){

    const [time,setTime] = useState(new Date())
    

                        //WE ARE ONLY GETTING ALL THIS TIME DATA BECAUSE THE 'NEW DATE'
                       //  OBJECT RETURNS DATE AND TIME. SO WE NEED ONLY THE TIME FOR CLOCK.
    function FormatTime(){
        let hours = time.getHours();   
        
        const minutes = time.getMinutes();
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"; // SETTING MERIDIEMS I.E  'AM' OR 'PM'
        
        hours = hours % 12 || 12 // HOURS TO NON-MILITARY FORMAT


        return `${Addzero(hours)}:${Addzero(minutes)}:${Addzero(seconds)} ${meridiem}`
    }


    useEffect(() =>{

        const interval_id = setInterval(() => {

            setTime(new Date())
        
        },100)
        
        return () => {
            clearInterval(interval_id)
        }

    },[])
    useEffect(() => {
        document.title = FormatTime()
    },[time])


    function Addzero(number){
        return number < 10 ? '0' + number : '' + number
    }


    return (<div className="clock-card">
                
                    <span className="clock">{FormatTime()}</span>
                
            </div>)
}
export default DIGITALCLOCK;