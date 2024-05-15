import { useContext } from "react"
import { Cont } from "../../App"

export default function Works(){

    const workcont = useContext(Cont)

    if(workcont.name == "work"){
         return <div className="Works">
        <div className="display">
      <h1>Works</h1>
     <p className="gic2"></p>
</div>
    </div>
    }

   
}