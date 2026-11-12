import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function getValue(text){
    return text == "" ? "DEFAULT" : text;
}

function Page() {
    //Collect variables to change later
    const [input, setInput] = useState("");
    const [h1, setPrinted] = useState("New Conditionals");

    function changeTitle(){
        setPrinted(input);
    }

    //Return page
    return (
        <div>
            <h1>New Conditionals</h1>
            <input/>
            <br/>
            <button onClick={changeTitle}>Change Title</button>
        </div>
    );
}
 

root.render(<Page/>);