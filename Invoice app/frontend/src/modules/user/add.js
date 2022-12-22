import { useRef, useState } from 'react';
import { API_CLIENT } from '../../shared/api_clients';
export const Add = (props)=>{
   // console.log(props.tabledata,"from app")
    
    var tabled=[];
    var totalprice=props.totalprice
    var sgst=props.sgst
    var cgst=props.cgst
    var nettotal=props.nettotal
 
 
 tabled=props.tabledata
  const [message , setMessage] = useState('');
  
  //const td = useRef('');
                     
   // const Totalprice= useRef('');
    //const CGST=useRef('');
    //const SGST=useRef('');
    //const Nettotal=useRef('')
                
                const doAdd = async ()=>{
                   
                    const result =await API_CLIENT.post(process.env.REACT_APP_ADD,{
                       'Data-':tabled,
                        
                        'Totalprice':totalprice,
                        'CGST':cgst,
                        'SGST':sgst,
                        'Nettotal':nettotal
                    });
                    setMessage(result.data.message);
                    console.log(message);
                    

                }
                
                //<h2>message</h2>
                return(<>
                  <h2> {message}</h2>
                <button button type="button" class="btn btn-success" onClick={doAdd} variant="contained">Save Data</button>
                </>)
                }