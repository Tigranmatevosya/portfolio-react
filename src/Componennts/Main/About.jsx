import { useContext } from "react"
import { Cont } from "../../App"

export default function About(){

    const abcont = useContext(Cont)

    if(abcont.name == "about"){
        return <div className="about">
        
      <div className="display">
      <h1>About</h1>
     <p className="gic2"></p>
</div>
   <div className="abdiv">
   I am a Tigran l frontend developer from Armavir, Armenia,
works in web development.

   </div>
   <h1 className="abw">What i know!</h1>

     <div className="abiv1">
     <div className="edudiv22">
        <p>HTML</p>
    </div>
    <div className="edudivv">
    <p>CSS</p>
    </div>
    
    <div className="edudivv">
    <p>JAVASCRIPT</p>
    </div>
    <div className="edudiv22">
    <p>REACT</p>
    </div>
     </div>
    </div>


}
    }
    