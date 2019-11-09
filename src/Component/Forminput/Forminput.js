import React from "react";
import "./Forminput.scss";

const Forminput=({label,handlechange,...otherprops})=>(
    <div className="group">
        <input className="form-input" onChange={handlechange} {...otherprops}/>
        {
            label?(
                <label className={`${otherprops.value.length ?'shrink':''} form-input-label`}>
                    {label}
                </label>
            ):null
        }
    </div>
)
export default Forminput;