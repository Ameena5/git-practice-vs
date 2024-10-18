
import pic1 from "./pic1.jpg"
import pic2 from "./pic2.jpg"
import pic3 from "./pic3.jpg"

function  Img(){
    return (
        <div>
            <img src={pic1} width={"300"} alt="pic1" /> 
            <img src={pic2} width={"300"} alt="pic2" />
            <img src={pic3} width={"265"} alt="pic3" />
            </div>
        )
}
export default Img;