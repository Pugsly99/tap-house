import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props){
  return (
    <>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
          type = "text"
          name = "name"
          placeholder = "Keg Name"
          required/>
        <input
          type = "text"
          name = "brand"
          placeholder = "Brand Name"
          required/>
        <input
          type = "text"
          name = "price"
          placeholder = "$0.00"
          required/>
        <input
          type = "text"
          name = "Alcohol Content"
          placeholder = "$0.00"
          required/>
        <input
          type='number'
          name='quantity'
          placeholder="0"
          min='0'
          required />
        <button type='submit'>Create New Keg</button>
      </form>
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewFormCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: parseInt(event.target.quantity.value), id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;