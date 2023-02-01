export default function Button ({accion}) {
    return (
        <button onClick={()=>{accion()}}>Muestra el Alert</button>
    )
}