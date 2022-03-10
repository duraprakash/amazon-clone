import React from "react";
import "./Switch.css";

function SwitchButton({themFunction}){
return(
<label className="switch">
  <input onChange={themFunction} type="checkbox" />
  <span className="slider round"></span>
</label>);
}
export default SwitchButton;