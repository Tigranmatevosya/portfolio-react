import { useContext } from "react"
import { Cont } from "../../App"

export default function Contacts(){

    const concont = useContext(Cont)
    if(concont.name == "contacts"){
        return <div className="Con">

<div className="display">
<h1>Contact</h1>
<p className="gic2"></p>
</div>

   <div className="divsend">
    <div className="divsend2">
        <h2>sent me a message </h2>

        <div className="inp">
            <p>Name*</p>
            <input type="text" name="name" />
        </div>

        <div className="inp">
            <p>Email*</p>
            <input type="text" name="name" />
        </div>

        <div className="inp">
            <p>Message*</p>
            <input type="text" name="name" />
        </div>
    <div className="sumbit">
        <button className="btnS">Submit</button>
    </div>
    </div>
   </div>

    </div>  
    }
    
}