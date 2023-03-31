import './App.css';
import StudentInfoComponent from "./component/StudentInfoComponent";
import React from "react";

function App() {
  return (
      <StudentInfoComponent id={1} name={'Trần Bá Tài'} age={19} address={'Huế'}/>
  );
}

export default App;
