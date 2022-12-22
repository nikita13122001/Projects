export const Ddate=()=>
{
    const current = new Date();
    const ddate = `${current.getDate()+7}/${current.getMonth()+1}/${current.getFullYear()}`;
return ddate;
}