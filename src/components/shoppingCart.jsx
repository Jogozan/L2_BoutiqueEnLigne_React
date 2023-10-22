import React from 'react';
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
import TotalCart from './totalCart.jsx';
import ProductInCart from './productInCart.jsx';
/*
 define root component
*/
export default class ShoppingCart extends React.Component {
   /**
   * Constructs a new instance of the ShoppingCart component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = {
      productsInCart: [],
      poidsTotal: 0
    }
  }

  /**
   * Updates the component state when the cart items change.
   * Calculates the total weight of the cart items.
   * @param {object} prevProps - The previous props object.
   */
  componentDidUpdate(prevProps) {
    if (prevProps.cartItems !== this.props.cartItems) {
      let total = 0;
      this.props.cartItems.forEach(item => {
        total += item.weight * item.stock;
      });
      this.setState({
        productsInCart: this.props.cartItems,
        poidsTotal: total
      });
    }
  }

  
  render() {
    const productsInCart = this.state.productsInCart.map(product =>
      <ProductInCart
        key={product.id}
        name={product.name}
        image={product.image}
        stock={product.stock}
        price={product.price}
        id ={product.id}
        deleteToCart={() => this.props.deleteToCart(product)}
        updateQuantity={this.props.updateQuantity}
      />
    );
    return (
      <div className="cart">
        <h4> Panier </h4>
        {productsInCart}
        <TotalCart
          productsInCart={this.state.productsInCart}
        />
        <div className="weight">
          poids total {this.state.poidsTotal}
        </div>
      </div>
    );
  }
}