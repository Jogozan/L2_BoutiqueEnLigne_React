import React from 'react';
import trash from "../assets/images/poubelle.jpg";
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
/*
 define root component
*/
export default class ProductInCart extends React.Component {
  /**
   * Constructs a new instance of the ProductInCart component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = {
      stock: this.props.stock
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

   /**
   * Event handler for clicking the delete button.
   * Calls the deleteToCart method from props.
   */
  handleClick = () => {
    this.props.deleteToCart();
  }

   /**
   * Event handler for changing the quantity input.
   * Calls the updateQuantity method from props.
   * @param {object} event - The event object.
   */
  handleChange(event){
    this.props.updateQuantity(this.props.id, event.target.value);
  }

  
  render() {
    const { name, image, stock } = this.props;
    return (
      <div className="product">
        <div className="info">
          <div className="name">{name}</div>
        </div>
        <div className="imageProduit"> <img src={image} /></div>
        <input type="number"
          min="1"
          value={stock}
          max="10"
          onChange={this.handleChange}
        />
        <img className="button"
          src={trash}
          alt="bin"
          onClick={this.handleClick} />
      </div>
    );
  }
}