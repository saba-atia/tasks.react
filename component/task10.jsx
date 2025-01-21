import React from "react";
function Task10({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}
        style={{
            backgroundColor:"orange",
            color:"white",
            margin:"10px",
            width:"100px",
            textAlign:"center"
        }}
        > student {index+1}</li>
      ))}
    </ul>
  );
}

const students=["","","",""];
function App(){
    return(
        <div>
            <Task10 items={students}/>
        </div>
    )
}

export default App;
