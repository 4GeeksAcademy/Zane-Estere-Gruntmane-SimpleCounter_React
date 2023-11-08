import React from "react";
import InputDigits from "./InputDigits";

const SimpleCounter = (props) => {

  return (
    <div className="p-3 mb-2 bg-primary-subtle ">
      <InputDigits

        Watcher={props.faBrands}
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
   SetInterval (const = () => {
    const Digit6 = Math.floor(counter / 100000);
    const Digit5 = Math.floor(counter / 99999);
    const Digit4 = Math.floor(counter / 9999);
    const Digit3 = Math.floor(counter / 999);
    const Digit2 = Math.floor(counter / 99);
    const Digit1 = Math.floor(counter / 9);
    counter++;
  }; 100000;)


export default SimpleCounter;