import { useEffect, useState } from "react"



export default function LegoShouldFunction() {
    const [legoPieces, setLegoPieces] = useState(0)
    const [isRender, setIsRender] = useState(false)
    
    useEffect(() => { // ini componentDidUpdate

    }, [legoPieces, isRender])

    return(
        <>
            <h1>This is should Function</h1>
        </>
    )
}