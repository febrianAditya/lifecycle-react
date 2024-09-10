import React from "react";

export default class RegisterComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    
    componentWillUnmount() {
        console.log("SETELAH HILANG DI DOM AKU TERPANGGIL");
    }

    render() {
        return(
            <>
                <h1>This is Register Page</h1>
            </>
        )
    }
}