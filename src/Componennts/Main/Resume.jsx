import { useContext } from "react"
import { Cont } from "../../App"

export default function Resume(){

    const rescont = useContext(Cont)

    if(rescont.name == "res"){
        return <div className="res">
        
        <div className="display">
      <h1>Resume</h1>
     <p className="gic2"></p>
</div>


<div className="edu">
        <div className="edimg">
       <div className="eduimg">
       <img src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fedu-icon.png&w=96&q=75" alt="" />
        <h2>Education</h2>
        </div>
        <div className="edudiv">
            <p>2022 - 2023</p>
            <p className="p4">It training center</p>
            <p>Armavir,Armenia</p>
          </div>
          <div className="edudiv2">
          </div>
          <div className="edudiv">
            <p>2022 - 2023</p>
            <p className="p4">It training center</p>
            <p>Armavir,Armenia</p>
          </div>
        </div>
        <div className="edimg">
       <div className="eduimg">
       <img src="https://bostami-bootstrap-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fexper-icon.png&w=64&q=75" alt="" />
        <h2>Experience</h2>
       </div>
        <div className="edudiv2">
          </div>
          <div className="edudiv">
            <p>2022 - 2023</p>
            <p className="p4">It training center</p>
            <p>Armavir,Armenia</p>
          </div> <div className="edudiv2">
          </div>
        </div>
     </div>

    </div>
    }

   
}