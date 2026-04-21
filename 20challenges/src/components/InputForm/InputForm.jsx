import { useState } from "react";

const InputForm = () => {
    const [text, setText] = useState("")
    return (
        <>
            <label htmlFor="inputText" >enter an text to caoting the number of char</label>
            <input type="text"  id="inputText"
                onChange={(e)=>setText(e.target.value)}
            />
            <samp>the count is {text.length}</samp>
        </>
    )
};

export default InputForm;