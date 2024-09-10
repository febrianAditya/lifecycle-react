import axios from "axios"
import { useEffect } from "react"

export default function LoginComponent() {

    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(function (response) {
        //         console.log(response, "==> final data");
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })    

        handleHitApi()
    }, [])

    const handleHitApi = async () => {
        try {
            const dataResult = await axios.get("https://jsonplaceholder.typicode.com/users")
    
            console.log(dataResult, "===> THIS");
            
        } catch (error) {
            console.log(error, "==> INI ERROR");
            
        }
    }

    return(
        <>
            <h1>This is Login Component</h1>
        </>
    )
}