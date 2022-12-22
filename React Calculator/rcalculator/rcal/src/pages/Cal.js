import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Output from "../components/Output";

function Cal() {
  const [result, setResult] = useState("");
  const [output,setOutput]=useState("");

  const onclick = (event) => {
    setResult(result.concat(event.target.innerText)); //only button set theinput value so we use setREsult
    
  };
  const handleMesssage = (event) => {
    //keypad chnages the value so we again use setREsult
    setResult(event.target.value);
  };
  const equal1 = () => {
    
    var mess1=result;
    console.log(mess1)
    var res = eval(mess1);
    console.log(res);
    setOutput(res);
    

  };
  return (
    <>
      <Input onchange={handleMesssage} value={result} />
      <Button fx={onclick} name="1" value="1" />
      <Button fx={onclick} name="2" value="2" />
      <Button fx={onclick} name="3" value="3" />
      <Button fx={onclick} name="4" value="4" />
      <Button fx={onclick} name="5" value="5" />
      <Button fx={onclick} name="6" value="6" />
      <Button fx={onclick} name="7" value="7" />
      <Button fx={onclick} name="8" value="8" />
      <Button fx={onclick} name="9" value="9" />
      <Button fx={onclick} name="+" value="+" />
      <Button fx={onclick} name="-" value="-" />
      <Button fx={onclick} name="*" value="*" />
      <Button fx={onclick} name="/" value="/" />
      <Button fx={equal1} name="=" value="=" />
      <Output name={output} />
    </>
  );
}

export default Cal;
