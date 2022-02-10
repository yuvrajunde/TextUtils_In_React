import React, {useState} from 'react'
import propTypes from 'prop-types'


export default function Textform(props) {

    const [text, setText]= useState("");
    const handleUpClick= ()=>{
        console.log("Uppercase is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Success","Message Converted to UpperCase")
       // console.log(setText);
    }
    const handleOnChange= (event)=>{
       // alert();
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick=()=>{
      console.log("Lowercase is clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Success","Message Converted to LowerCase")
    }

    const handleCopyClick=()=>{
      console.log("Text Copied");
      var text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Success","Message Copied")
    }

    const handleClearTextClick=()=>{
      console.log("CLear Text clicked");
      setText("");
      props.showAlert("Success","Message Deleted")
    }

  return (
<>
<div className="container mb-3"  >
    <h1>{props.heading}</h1>
  <label htmlFor="myBox" className="form-label">{props.label}</label>
  <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}   style={{ backgroundColor:'#042743'?'White':'Black'}}></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary m-3" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary m-3" onClick={handleCopyClick}>Copy Text</button>

  <button className="btn btn-primary m-3" onClick={handleClearTextClick}>Clear Text</button>
</div>

<div className="container"  > 
     <h2 className="text-success" >Your Text Summary...</h2> 
     <p>{text.split(' ').length<=1?text.split(' ').length=0:text.split(' ').length-1} words , {text.split('.').length<=1?text.split('.').length=0:text.split('.').length-1} Sentences and {text.length} characters. </p>  
    <p>{0.008 * text.split(' ').length} Minutes required to read.</p> 
    <h2 className="text-success">Preview</h2>
    <p>{text.length>0?text:"Enter some text to preview here"}</p>
</div> 
</>

  )
}
Textform.propTypes={
    label: propTypes.string,
    heading: propTypes.string
}
