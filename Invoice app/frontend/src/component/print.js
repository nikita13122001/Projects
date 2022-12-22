export const Print=()=>
{
const Printscreen=()=>{
  const pdf=window.print();
  return pdf;
}
return(<button button type="button" class="btn btn-primary"onClick={Printscreen}>Downlaod PDF</button>);
}