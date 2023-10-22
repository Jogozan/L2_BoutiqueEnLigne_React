import React from 'react';

import ProductList from './productList.jsx';
import ShoppingCart from './shoppingCart.jsx';

import '../assets/style/app.css';

import productList from '../data/products.js';

/*
 define root component
*/
export default class App extends React.Component {

  /**
   * Constructs a new instance of the App component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
    this.state = { products: [], cartProducts: [] };
    this.addToCart = this.addToCart.bind(this);
    this.deleteToCart = this.deleteToCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  /**
   * Deletes a product from the cart.
   * @param {object} product - The product to be deleted.
   */
  deleteToCart(product) {
    const existingProductIndex = this.state.products.findIndex(
      elem => elem.id === product.id
    );
    let existingProduct = this.state.cartProducts.find(elem => elem.id === product.id);
    if (existingProduct) {
      if (existingProduct.stock > 0) {
        this.state.cartProducts = this.state.cartProducts.filter(elem => elem.id !== product.id);
      }
    }
    this.state.products[existingProductIndex].stock += parseInt(existingProduct.stock);
    this.setState({
      products: this.state.products,
      cartProducts: this.state.cartProducts,
    });
  }

  /**
   * Adds a product to the cart.
   * @param {object} product - The product to be added.
   */
  addToCart(product) {
    if (product.stock > 0) {
      const prodIndex = this.state.cartProducts.findIndex(elem => elem.id === product.id);
      const prod = this.state.products.find(elem => elem.id === product.id);
      
      if (prodIndex !== -1) {
        this.state.cartProducts[prodIndex].stock++;
        if (prod.stock > 0) {
          prod.stock--;
          this.setState({
            products: this.state.products,
            cartProducts: this.state.cartProducts,
          });
        }
      }
      else{
        if (prod.stock > 0) {
          this.setState({
            cartProducts: [...this.state.cartProducts, { ...product, stock: 1 }],
          });
          prod.stock--;
        }
      }

    }
  }

  /**
   * Updates the quantity of a product in the cart.
   * @param {number} id - The ID of the product.
   * @param {number} quantity - The new quantity of the product.
   */
  updateQuantity(id, quantity){
    const cartProducts = this.state.cartProducts;
    const itemIndex = cartProducts.findIndex(item => item.id === id);
    const updatedItem = { ...cartProducts[itemIndex], stock: quantity };
    const newcartProducts = [...cartProducts.slice(0, itemIndex), updatedItem, ...cartProducts.slice(itemIndex + 1)];
    
    let products = [...this.state.products];
    const productIndex = products.findIndex(product => product.id === id);
    const diff = products[productIndex].stock + (cartProducts[itemIndex].stock - quantity);
    if (diff>=0) {
      products[productIndex].stock = diff;
      this.setState({
        cartProducts: newcartProducts,
        products
      });
    } 
  }

  /**
   * Lifecycle method called after the component has been mounted.
   * Initializes the products state with the data from the productList.
   */
  componentDidMount() {
    this.setState({ products: productList });
  }

  render() {
    return (
      <div className='app'>
        <ProductList
          addToCart={this.addToCart}
          productList = {this.state.products}
        />
        <ShoppingCart
          cartItems={this.state.cartProducts}
          deleteToCart={this.deleteToCart}
          updateQuantity={this.updateQuantity}
        />
      </div>
    );
  }
}
