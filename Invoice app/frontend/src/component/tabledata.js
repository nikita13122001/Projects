import React, { useState } from 'react';
export const DataForm = (props) => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const changeItem = (event) => {

    setItem(event.target.value);

  };
  const changeQuantity = (event) => {

    setQuantity(event.target.value);
  };



  const changePrice = (event) => {

    setPrice(event.target.value);

  };



  const transferValue = (event) => {
    event.preventDefault();
    const val = {
 
      item,

      price,
      quantity,
      sum:0
    };

    props.func(val);

    clearState();

  };



  const clearState = () => {

    setItem('');
    setPrice('');
    setQuantity('');

  };



  return (

    <div>
    
    <label>Item</label>

      <input type="text" value={item} onChange={changeItem} />
      <label>Quantity</label>
      <input type="text" value={quantity} onChange={changeQuantity} />

      <label>Price</label>

      <input type="text" value={price} onChange={changePrice} />
  

      <button  onClick={transferValue}>+</button>

    </div>

  );
}