import React from 'react';
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
/*
 define root component
*/
export default class TotalCart extends React.Component {
  /**
   * Constructs a new instance of the TotalCart component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }
  
  /**
   * Updates the component state when the products in the cart change.
   * Calculates the total price of the cart.
   * @param {object} prevProps - The previous props object.
   */
  componentDidUpdate(prevProps) {
    let total = 0;
    if (prevProps.productsInCart !== this.props.productsInCart) {
      this.props.productsInCart.forEach(item => {
        total += item.price * item.stock;
      });      
      this.setState({
        total
      });
    }
  }

  
  render() {
    return (
      <div className="total">
        TOTAL: <div className="price">{this.state.total}</div>
      </div>
    );
  }
}