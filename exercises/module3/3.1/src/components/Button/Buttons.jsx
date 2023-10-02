import Button from "./Button"
import React from "react"

const Buttons = ({handler}) => {
    return(
        <div>
            <Button label='good' handler={handler}/>
            <Button label='neutral' handler={handler}/>
            <Button label='bad' handler={handler}/>
        </div>
    )
}
export default Buttons