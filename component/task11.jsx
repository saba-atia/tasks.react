import React from "react";

function Task11({numbers}) {
return (
    <div>
  <ul>
    {numbers.map((number,index)=>(
<li key={index}>
    <span style={{backgroundColor:"yellow" , margin:"10px"}}>Doubled  </span>
  number  {number} is {number*2}
</li>

    ))}
  </ul>
    </div>
);

}

const numbers =[1,2,3,4,5];
function App(){
   return(
   <div>
        <Task11 numbers={numbers}/>
    </div>
);
}

export default App;