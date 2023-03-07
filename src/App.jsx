import React, { useState } from "react";

const App = () => {
  /*
    ***** Counter Function *****
    // const [count, setCount] = useState(0);
    // function Increment() {
      //   setCount(count + 1);
      // }
      // return (
        //   <>
        //     Count : {count}
        //     <button onClick={Increment}>Increase</button>
        //   </>
        // );
   */

        
  /*
 ***** Add list Function *****
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState();
  function Add() {
    setList([...list, name]);
    setName(" ");
  }
  return (
    <>
      <div>
        <ul>
          {list.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={Add}>Add</button>
      </div>
    </>
  );
  */
};

export default App;
