
import Third from "./third";
function Second(props){
    var {b}=props
    return (<>
    <h3>Second component {b} </h3>
    <Third c={b}/>
    </>
    )
}
export default Second;