import React from 'react';
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
import AddToCart from './addToCart.jsx';
/*
 define root component
*/
export default class Product extends React.Component {
    /**
   * Constructs a new instance of the Product component.
   * @param {object} props - The component props.
   */
    constructor(props) {
        super(props);
    }

    
    render() {
        const product = this.props.product;
        const { image, description, price, name, stock, weight } = this.props;
        return (
            <div className="product">
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="description">{description}</div>
                    <div className="weight">{weight}</div>
                </div>
                <div className="imageProduit">
                    <img src={image} />
                </div>
                <div className="price">{price}</div>
                <div className="petit">
                    <div className="stock">
                        qté <div className="petit">{stock}</div>
                    </div>
                </div>
                <AddToCart
                    addToCart={() => this.props.addToCart(product)}
                />
            </div>
        );
    }
}

