import { useState } from "react";
import { Input } from "./inputdetail";
export const Billcompany= ()=>{
const [Billcompany, setBillcompany] = useState("");
const bill_detail=(evt)=>{
setBillcompany(evt.target.value);
}
return (
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
<Input val={Billcompany} fn={bill_detail} labelValue= "Enter Billing Company Name" />
</div>
)}
