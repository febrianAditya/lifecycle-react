// import { useEffect, useState } from "react"

import React, { useEffect, useState } from "react"

export default function TimerComponent() {
    const [dateTime, setDateTime] = useState(new Date())

    const tick = () => {
        setDateTime(new Date())
    }

    

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("febrian");
            
            tick()
        }, 1000)


        return () =>{ // ini untuk nngehandle componentWillUnmount return ini
            clearInterval(timer)
        }
    }, [])


    // componentWillUnmount()  {
    //     clearInterval(setInterval)
    // }

    // useEffect(() => {
    //     console.log("aku kepanggil yaa");
        
        
    // })

    return(
        <>
            <h1>This is a Clock</h1>
            <hr />
            <h3>{dateTime.toLocaleTimeString()}</h3>
        </>
    )
}