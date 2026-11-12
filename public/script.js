import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function getValue(text){
    return text == "" ? "DEFAULT" : text;
}

function Page() {
    //Collect variables to change later
    const [input, setInput] = useState("");
    const [header, setPrinted] = useState("New Conditionals");

    function changeTitle(){
        setPrinted(input);
    }

    //Return page. Also handling event object as function parameter
    return (
        <div>
            <h1>{header}</h1>
            <input onChange={(event) => setInput(event.target.value)}/>
            <br/>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    );
}

root.render(<Page/>);
