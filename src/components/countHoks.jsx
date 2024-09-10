import { useEffect, useState } from "react";


export default function CountHook() {

    const [name, setName] = useState("febri")

    useEffect(() => {
        console.log("Kaya componentDidMount");
        
    }, [])

    return(
        <>
            {console.log("Render Hook") }
            
        </>
    )
}