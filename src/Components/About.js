import React, {useState} from "react";

export default function About() {
  

    const [myStyle, setmyStyle] = useState({
        color: "black",
        backgroundColor : "white"
    })

    const[btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleswitch = ()=>{
        if (myStyle.color === "white"){
            setmyStyle({
        color: "black",
        backgroundColor : "white"
        })
        setbtnText("Enable Dark Mode")
    }
        else{
            setmyStyle({
        color: "white",
        backgroundColor : "black",
        border: "1px solid orange"
        })
        setbtnText("Enable Light Mode")
        }
    }

  return (
    <>
    <div className="container" style={myStyle}>
        <h1>About u@s</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button"data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Introduction
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Text@uTils is a website that is used for user to manipulate the text ccording to their need.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button"data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              About oWner
            </button>
          </h2>
          <div id="collapseTwo"className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Hello Everyone my name is Utkarsh Srivastava.</strong> 
              I have made this website for testing purpose as this is my my first React based Web site. Hopefully it wll be helpful for you also.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse"  data-bs-target="#collapseThree"  aria-expanded="false" aria-controls="collapseThree">
              Languge that i know:
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Languages that i know.</strong>
              <ol>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Sql</li>
                <li>Html</li>
                <li>Css</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
        <button onClick={toggleswitch} className="btn btn-primary my-2">{btnText}</button>
    </div>
    </>
  );
}
