import Title from "../Title/Title"

export default function FunctionalComponent (props) {
    const { name , apodo, number} = props.objeto
    return(
        <div>
            
            <h1>Hola soy un componete de {name} </h1>
        </div>
    )
}