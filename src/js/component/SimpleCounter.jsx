import React from "react";
import InputDigits from "./Input";

const SimpleCounter = (props) => {

  return (
    <div>
      <InputDigits
        Watcher={props.faWatchmanMonitoring}
        Digit6={props.digitsSix}
        Digit5={props.digitsFive}
        Digit4={props.digitsFour}
        Digit3={props.digitsThree}
        Digit2={props.digitsTwo}
        Digit1={props.digitsOne}

      />

    </div>
  )
};

let counter = 0;
const intervalId = setInterval(() => {
  const Digit6 = Math.floor(counter / 100000);
  const Digit5 = Math.floor((counter % 100000) / 10000);
  const Digit4 = Math.floor((counter % 10000) / 1000);
  const Digit3 = Math.floor(counter % 1000 / 100);
  const Digit2 = Math.floor(counter % 100 / 10);
  const Digit1 = Math.floor(counter % 10);
  counter++;
} 1000;);

console.log(counter);


export default SimpleCounter;