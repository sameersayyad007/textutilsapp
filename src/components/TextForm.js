import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { event } from 'jquery';



export default function TextForm(props) {
    const [text , setText] = useState('')
    const uppercaseclk=()=>{
        let newtext= text.toUpperCase()
    //    console.log("uppercase was clicked "+text)
        setText(newtext); 
    }

    const lowercaseclk=()=>{
        let newtext= text.toLowerCase()
      //  console.log("uppercase was clicked "+text)
        setText(newtext); 
    }

    const handleonchange=(event)=>{
      //  console.log("handleonchange was clicked")
        setText(event.target.value)
    }
    const clearclk=()=>{
        let cleartext= ''
        setText(cleartext)
    }
     
    const copytext=()=>{
      var text= document.getElementById("textbox")
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const removespaces=()=>{
      let newtext= text.split(/[ ]+/);
      setText(newtext.join(" "))
    }
    //    
  return (
    <>

    <div className='container'>
      <form>
  <div className="form-group">
   <h2>{props.heading}</h2>
    <textarea className="form-control"  rows="12"  value={text} onChange={handleonchange} id='textbox'></textarea>
    <center>
    <button className="btn btn-primary my-3" onClick={uppercaseclk} type='button'>Convert to uppercase</button>
    <button className="btn btn-primary my-3 mx-3"  type='button' onClick={lowercaseclk}>Convert to lowercase</button>
    <button className="btn btn-primary my-3 mx-3"  type='button' onClick={copytext}>Copy text to clipboard</button>
    <button className="btn btn-primary my-3 mx-3"  type='button' onClick={removespaces}>Remove extra spaces</button>
    <button className="btn btn-primary my-3 "  type='button' onClick={clearclk}>Clear text</button>
    </center>
  </div>
</form>
    </div>

    <div className="container">
        <h2>Your text summary: </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>time required to read the text entered: {0.008* text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}


TextForm.propTypes={
    heading: PropTypes.string.isRequired,

}

TextForm.defaultProps={
    heading: 'Enter the text below:'
}