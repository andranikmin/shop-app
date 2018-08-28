import React from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import { addProduct } from '../store/seller/actions';
import { generateId } from '../helper';

class Seller extends React.Component {

    generateId = generateId();
    handleAdd = () => {
        const id = this.generateId();
        const product_name = this.productName.value;
        const product_price = this.productPrice.value;
        const product_type = this.productType.value;

        if(!product_name || !product_price){
            return;
        };

        this.props.addProduct(id, product_name, product_price, product_type);
        this.productName.value = "";
        this.productPrice.value = "";
        this.productType.value = "toys";
    }

    render() {
        const { products } = this.props;
        
        return (
            <div className="seller">
                <div className="addProduct">
                    <div className="addProduct_title">
                        Add new product
                    </div>
                    <input placeholder="Product name" className="addProduct_name" ref={el => this.productName = el} />
                    <input type="number" placeholder="Product price" className="addProduct_price" ref={el => this.productPrice = el}/>
                    <select className="addProduct_type" ref={el => this.productType = el}>
                        <option value="toys">Toys</option>
                        <option value="books">Books</option>
                        <option value="flowers">Flowers</option>
                    </select>
                    <button className="addProduct_button" type="submit" onClick={this.handleAdd}>Add</button>
                </div>
                <Products products={products} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { seller: { products } } = state;

    return {
        products
    };
};

const mapDispatchToProps = (dispatch) => ({
    addProduct(id, product_name, product_price, product_type){ 
        dispatch(addProduct(id, product_name, product_price, product_type))
    },  
});

export default connect(mapStateToProps, mapDispatchToProps)(Seller);

