import { Component } from "react";

class ClassComponent extends Component{
    render() {
        return (
            <div>
                <h1> Hola soy un componete de {this.props.name}</h1>
            </div>
        )
    }
}

export default ClassComponent;