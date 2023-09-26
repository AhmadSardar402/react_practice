import React, {useState} from 'react'

const TextForm = (props) => {
    const handleOnClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState(); 
  return (
    <div className="container my-2">
        <h6>{props.heading}</h6>
        <form>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
        </form>
        <button className="btn btn-primary my-2" onClick={handleOnClick}>Convert To Uppercase</button>
    </div>
  )
}

export default TextForm
