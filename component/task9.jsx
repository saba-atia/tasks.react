import React from "react";
function Task9({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}> student {index+1}</li>
      ))}
    </ul>
  );
}

const students=["","","",""];
function App(){
    return(
        <div>
            <Task9 items={students}/>
        </div>
    )
}

export default App;
