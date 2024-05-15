import { useContext, useState } from "react"
import { Cont } from "../../App"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Buttons(){

    const btncont = useContext(Cont)
    const [colb,setColb] = useState("#f3f6f6")
    const [colw,setColw] = useState("#f3f6f6")
    const [colr,setColr] = useState("#f3f6f6")
    const [colc,setColc] = useState("#f3f6f6")

    
    return <div className="btns">
        <div>
      <button style={{color:colb}} onClick={()=>{
        btncont.setName("about");
        if(colb == "#1b74e4"){
            setColb("#f3f6f6")
        }else{
            setColb("#1b74e4")

        }
        }} className="about">
        <i class="fa fa-user" aria-hidden="true"></i>
            About</button>
        <button style={{color:colr}} onClick={()=>{
         
        if(btncont.name !== "res"){
           btncont.setName("res")
            setColb("#f3f6f6")
            setColw("#f3f6f6")
            setColc("#f3f6f6")
        }else{
            if(colr == "#1b74e4"){
                setColr("#f3f6f6")
            }else{
                setColr("#1b74e4")
    
            }
        }}} className="resume">
<i class="fa fa-file-text-o"></i>
            Resume</button>
        <button style={{color:colw}} onClick={()=>{

        if(btncont.name !== "work"){
            btncont.setName("work")
            setColb("#f3f6f6")
             setColr("#f3f6f6")
             setColc("#f3f6f6")
         }else{
        if(colw == "#1b74e4"){
            setColw("#f3f6f6")
        }else{
            setColw("#1b74e4")

        }  }
      }} className="works">
            <i class="fa fa-suitcase" aria-hidden="true"></i>
            works</button>
        <button style={{color:colc}} onClick={()=>{
        btncont.setName("contacts")

        if(btncont.name !== "contacts"){
            btncont.setName("contacts")
            setColb("#f3f6f6")
             setColr("#f3f6f6")
             setColw("#f3f6f6")
         }else{
        if(colc == "#1b74e4"){
            setColc("#f3f6f6")
        }else{
            setColc("#1b74e4")

        }    }    }} className="contact">
            <i class="fa fa-address-book" aria-hidden="true"></i>
            Contact</button>
        </div>
    </div>
}