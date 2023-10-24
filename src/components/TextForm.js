import React, {useState} from 'react'

const TextForm = (props) => {
    const handleUpClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        let newText= text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter Text Here"); 
  return (
    <>
        <div className="container my-2">
            <h6>{props.heading}</h6>
            <form>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
            </form>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        </div>
        <div className="container my-2">
            <h4>Your Text summary</h4>
            <p>{text.split(" ").length} Words, {text.length} Characters.</p>
            <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes required to read.</p>
        </div>

    </>
  )
}

export default TextForm
