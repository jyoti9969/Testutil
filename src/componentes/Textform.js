import React, { useState } from 'react'

export default function Textform(props) {

  const handletoUppercase = () => {
    // console.log("uupercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
   props.showAlert("uppercase has enabled","success")
  }
  const handletoLowercase = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lowercase has enabled","success")
  }
  const handletoclear = () => {

    let newText = '';
    setText(newText);
    props.showAlert("All clear","danger")
  }
  const handletoreverse = () => {

    let newText = text.split(" ");
    let newarray = newText.reverse();
    let joinarray = newarray.join(" ");
    setText(joinarray);
    props.showAlert("reversecase has enabled","success")
  }
  const handlecopy = () => {
    var text=document.getElementById("Textbox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy text has enabled","warning")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extraspacecase has enabled","success")
  }
  const handlechange = (event) => {
    setText(event.target.value);

  }


  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3 my-3">
        <h2 className={`text-${props.mode==='light'?'dark':'light'} `}>Enter Your Text</h2>

        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="Textbox" onChange={handlechange}  value={text} rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handletoUppercase}>convertToUppercase</button>
        <button className="btn btn-primary my-3" onClick={handletoLowercase}>convertToLowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handletoclear}>clear text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handletoreverse}> reverse text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handlecopy}> copy text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}> remove extra spaces</button>
      </div>

      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p className="mb-5   ">{text.length>0 ? text:"enter something to preview it here"}</p>
      </div>
    </>
  )
}
