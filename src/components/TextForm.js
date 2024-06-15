import React, { useState } from 'react'


export default function TextForm(props) {

    // new state variable
    const [text, setText] = useState("");
    // "setText" is updation function
    // setText("State Changed"); // to change state

    const handleUpClick = () => {
        let utext = text.toUpperCase();
        setText(utext);
        props.showAlert("Converted to UpperCase","success");
    } 
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} className="form-control" id="exampleFormControlTextarea1" rows="7" onChange={handleOnChange} placeholder="Enter Text here" value={text}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <h1 className='my-5'>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
    )
}
