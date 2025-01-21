import React from "react";

function Task12 ({ numbers }) {
  return (
    <div>
      <h2>Even Numbers</h2>
      <ul>
        {numbers.map((number, index) => {
          if (number % 2 === 0) {
            return <li key={index}>{number}</li>;
          }
        })}
      </ul>

      <h2>Odd Numbers</h2>
      <ul>
        {numbers.map((number, index) => {
          if (number % 2 !== 0) {
            return <li key={index}>{number}</li>;
          }
        })}
      </ul>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // مصفوفة الأرقام

function App() {
  return (
    <div>
      <Task12 numbers={numbers} />
    </div>
  );
}

export default App;
