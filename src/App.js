// import logo from './logo.svg';
// import './App.css';
import React from "react";

// import Button from "./components/shared/Button.js";
// import Cal from "./components/tests/Cal.js";
import "./components/shared/Button.css";
import "./components/tests/Cal.css";
import Form from "./components/shared/Form";

function App() {
  // const [operation, setOperation] = useState({ a: 0, b: 0 });
  // const [b, setB] = useState(0);
  // const table = (val) => {
  //   let i = 1;
  //   let result = [];
  //   while (i <= 10) {
  //     result.push(`${operation.b} * ${i} = ${operation.b * i}`);
  //     i++;
  //   }
  //   return result;
  // };

  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "A":
  //       if (value === "") {
  //         setOperation((prev) => {
  //           let st = prev;
  //           st.a = "";
  //           return st;
  //         });
  //       } else {
  //         setOperation((prev) => {
  //           let st = prev;
  //           st.a = parseInt(value);
  //           return st;
  //         });
  //       }

  //       break;
  //     case "B":
  //       if (value === "") {
  //         setOperation((prev) => {
  //           let st = { ...prev };
  //           st.b = "";
  //           return st;
  //         });
  //       } else {
  //         setOperation((prev) => {
  //           let st = { ...prev };
  //           st.b = parseInt(value);
  //           return st;
  //         });
  //       }
  //       break;
  //     default:
  //   }
  // };

  // const onHandlebChange = (e) => {
  //   const value = e.target.value;
  //   if (value === "") {
  //     setB("");
  //   } else {
  //     setB(parseInt(value));
  //   }
  // };

  return (
    <div>
      {/* <div className="body">
        <input
          type="text"
          // value={operation.a}
          onChange={onHandleChange}
          name={"A"}
        ></input>
        <input
          type="text"
          // value={operation.b}
          onChange={onHandleChange}
          name={"B"}
        ></input>

        <Cal
          className="addition"
          a={operation.a === "" ? 0 : operation.a}
          b={operation.b === "" ? 0 : operation.b}
          table={table}
        ></Cal>
      </div> */}
      <Form></Form>
    </div>
  );
}

export default App;
// {
//   /* <Button className="addition">Addition</Button> */
// }
// {
//   /* // {table(b).map((val, index) => { */
// }
// {
//   /* //   return <p key={"Math" + index}>{val}</p>; */
// }
// {
//   /* // })} */
// }
// {
//   /* <Button className="subtraction">Subtraction</Button> */
// }
// {
//   /* <Cal className="subtraction">{a - b}</Cal>
//         {/* <Button className="multiplication">Multiplication</Button> */
// }
// {
//   /* <Cal className="multiplication">{a * b}</Cal> */
// }
// {
//   /* <Button className="modulus">Modulus</Button> */
// }
// {
//   /* <Cal className="modulus">{a % b}</Cal> */
// }
// {
//   /* <Button className="division">Division</Button> */
// }
// {
//   /* <Cal className="division">{a / b}</Cal> */
// }
