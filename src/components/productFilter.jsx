import React from 'react';
import '../assets/style/productList.css';
import '../assets/style/cart.css';
import '../assets/style/product.css';
import '../assets/style/app.css';

/*
 define root component
*/
export default class ProductFilter extends React.Component {
  /**
   * Constructs a new instance of the ProductFilter component.
   * @param {object} props - The component props.
   */
  constructor(props) {
    super(props);
  }

  
  render() {
    const { searchText, textChange } = this.props;
    return (
      <div className='filter'>
        <input
          type="text"
          placeholder='filtrer les produits'
          value={searchText}
          onChange={textChange}>
        </input>
      </div>
    );
  }
}