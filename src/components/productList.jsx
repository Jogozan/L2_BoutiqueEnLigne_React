import React from 'react';
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';
import Product from './product.jsx';
import ProductFilter from './productFilter.jsx';

/*
 define root component
*/
export default class ProductList extends React.Component {
    /**
   * Constructs a new instance of the ProductList component.
   * @param {object} props - The component props.
   */
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }

    /**
   * Event handler for input text change.
   * Updates the inputText state with the new value.
   * @param {object} event - The event object.
   */
    handleTextChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    };

    
    render() {
        // Filter the products based on the input text
        const filteredProducts = this.props.productList.filter((product) =>
            product.name.toLowerCase().includes(this.state.inputText.toLowerCase())
        );
        // Generate the Product components for each filtered product
        const products = filteredProducts.map(product => <Product
            {...product}
            key={product.id}
            addToCart={() => this.props.addToCart(product)}
        />)
        return (
            <div className='productList'>
                <h4> Boutique </h4>
                <ProductFilter
                    searchText={this.state.inputText}
                    textChange={this.handleTextChange} 
                />
                <div className="productsZone">
                    {products}
                </div>
            </div>
        );
    }
}
