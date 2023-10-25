import React, {useState} from 'react'


export default function TextForm(props) {

    // Hooks-:
    const[text, setText] = useState("");

// 1) Uppercase
    const handleupclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

// 2) lowercase
    const handlelowclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
// 3) Clear Text
    const handleclearclick = ()=>{
        let newtext = ""
        setText(newtext);
    }
    // copyText
    const handlecopyclick = ()=>{
    var text = document.getElementById("my-Box");
    text.select();
    text.setSelectionRange(0,100);
    navigator.clipboard.writeText(text.value);
    alert(text.value);
    }


// this is for set up or loading
    const handlechange = (event)=>{
        setText(event.target.value);
    }


// Function to calculate word count without counting spaces
    const calculateWordCount = (text) => {
    if (!text) return 0;
    const words = text.trim().split(/\s+/); // Split by whitespace and trim leading/trailing spaces
    const nonEmptyWords = words.filter(word => word.length > 0); // Filter out empty strings
    return nonEmptyWords.length;
    }


  return (
    <>
        <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#4b0082":"white", color: props.mode==="light"?"black":"white"}} value={text} onChange={handlechange} placeholder= "Text@uTils, Enter the Text here:  " id="my-Box" rows="6"></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert upperCase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowclick}>Convert lowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <h1>Your Summary</h1>
            <p>{calculateWordCount(text)} words and {text.length} characters</p>
            <h3>Preview of summary</h3>
            <p>{text.length>0 ? text : "Enter something to preview"}</p>
        </div>
    </>
  )
}
