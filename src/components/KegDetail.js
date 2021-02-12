import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  let stockMessage;
  if (keg.quantity > 5){
    stockMessage = keg.quantity;
  }else if (keg.quantity <= 5 && keg.quantity > 0){
    stockMessage = "Only" + keg.quantity + "Left";
  }else {
    stockMessage = "Out of Stock";
  }

  return (
    <>
      <h1>About this Keg</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{props.alcoholContent}%</h3>
      <button type = "button" onClick = {props.onRestock} className = "btn btn-primary"> Restock </button>
      <button hidden = {keg.quantity === 0} type = "button" onClick = {props.onBuy} className = "btn btn-secondary">Buy</button>
    </>
  );
}

KegDetail.protoTypes = {
  keg: PropTypes.object,
  onRestock: PropTypes.func,
  onBuy: PropTypes.func
}

export default KegDetail;