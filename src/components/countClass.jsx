
import React from "react";

export default class CountClass extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "febri"
        }
        console.log("====> INI CONSTRUCTOR");
    }

    // component
    should
    componentDidMount() {
        console.log("===>? COMPONENT DI MOUNT");
    }

    render() {
        return(
            <>
                { console.log("====? INI di render") }  
            </>
        )
    }


}