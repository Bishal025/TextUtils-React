import PropTypes from 'prop-types';
import React , {useState} from 'react';


export default function TextForm(props) {
 
  const handleUcClick = () =>{
    // console.log("Upper case button was clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.alert('Converted to Uppper Case!','success')
  }
 
  const handleLcClick = () =>{
    // console.log("Upper case button was clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.alert('Converted to Lower Case!','success')
  }
 
  const clearText = () =>{
    setText('');
    props.alert('Text cleared!','success')
  }
 
  const copyText =()=> {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Text copied to clipboard!');
        props.alert('Text copied to clipboard!','success')
      })
      .catch((err) => {
        setCopySuccess('Text not copied to clipboard!');
      });
  }
  //LISTEN AND EVENT 

  const handleOnChange= (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

const [text, setText] = useState('');
const [copySuccess, setCopySuccess] = useState('');

  return (
   <>
                <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                  <h1>{props.heading}</h1>
                    <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8" placeholder='Enter Text Here'> </textarea>
                    </div>    
                  <button className="btn btn-primary mx-2" onClick={handleUcClick}>CONVERT TO UPPER CASE</button>
                  <button className="btn btn-primary mx-1" onClick={handleLcClick}>CONVERT TO LOWER CASE</button>
                  <button className="btn btn-primary mx-1" onClick={clearText}>Clear text</button>
                  <button className="btn btn-primary mx-1" onClick={copyText}>Copy to Clipboard</button>
                </div>
                <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                  <h1>Your Text Summary</h1>
                  <p>  {text.split(" ").length} words and {text.length} characters</p>
                  <p>  {0.008 * text.split(" ").length} minutes read</p>
                  <h2>Preview</h2>
                  <p>{text.lenght>0?text:"Enter Something to Preview"}</p>
                  <p>{copySuccess}</p>
                </div>
   </>
  )
}

TextForm.propTypes={
    heading:PropTypes.string.isRequired
  }