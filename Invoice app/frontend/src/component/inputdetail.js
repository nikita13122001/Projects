import TextArea from "antd/lib/input/TextArea";

export const Input = ({labelValue, fn, val})=>{
    return (<div className='form-group'>
    <TextArea value = {val} onChange={fn}  className='form-control' type='text' placeholder = {labelValue}/>
    </div>);
}
