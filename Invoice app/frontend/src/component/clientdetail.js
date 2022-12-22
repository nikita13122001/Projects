import { useState } from "react";
import { Input } from "./inputdetail";
import * as React from 'react';
export const Clientdetail= ()=>{
    const [clientdetail, setClientdetail] = useState("");
    const client_detail=(evt)=>{
      var name=evt.target.value;

    setClientdetail(name);
}

return (
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
<Input val={clientdetail} fn={client_detail} labelValue= "Enter Client Details" />
</div>
)}