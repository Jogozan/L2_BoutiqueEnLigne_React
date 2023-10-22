import React from 'react';
import cart from "../assets/images/panier.jpg";
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
/*
 define root component
*/
export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  /**
  * Update the cart by calling the addToCart function passed in props.
  *
  * @function handleClick
  * @returns {void}
  */
  handleClick = () => {
    this.props.addToCart();
  }

  /**
  * called each time the component needs to be updated.
  *
  * @function render
  * @returns {JSX.Element} button
  */
  render() {
    return (
      <img
        className="button"
        src={cart}
        alt="cart"
        onClick={this.handleClick}
      />
    );
  }
}