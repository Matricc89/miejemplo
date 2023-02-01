export default function ParentComponent({children}) {
    return (
        <div style={{height:'300px', width:'300px', backgroundColor:'red'}}>
            {children}
        </div>
    )
}