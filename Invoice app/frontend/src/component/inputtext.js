export const Inputtext = ({ labelValue, fn, val }) => {
  return (<div className='form-group'>
    <input value={val} onChange={fn} className='form-control' type='text' placeholder={labelValue} />
  </div>);
}
