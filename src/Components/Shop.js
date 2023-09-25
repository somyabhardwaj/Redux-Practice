import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreator } from '../state/index.js';

function Shop() {
  const dispatch = useDispatch();
  const { depositMoney, widthdrawMoney } = bindActionCreators(ActionCreator, dispatch);

  const onDeposit =()=>{
   
    depositMoney(100) ;

  }
  return (
    <div>
      <button className="btn btn-primary" onClick={onDeposit}>+</button>
      <p>Add Component</p>
      <button className="btn btn-primary" onClick={() => { widthdrawMoney(100) }}>-</button>
    </div>
  );
}

export default Shop;
