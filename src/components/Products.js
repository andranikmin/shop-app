import React from 'react';
import { connect } from 'react-redux';

import { deleteProduct } from '../store/seller/actions';
import { deleteProduct as deleteShoppingCardProduct } from '../store/buyer/actions';
import delete_icon from '../assets/images/delete_icon.png';

class Products extends React.Component {

    deleteProduct = (id) => {
        this.props.deleteProduct(id);
        this.props.deleteShoppingCardProduct(id);
    }

    render() {
        const { products } = this.props;

        return (
            <div className="products">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <div>
                            <span className="product_name">{product.name}</span>
                            <span className="product_type">{product.type}</span>
                        </div>
                        <img className="delete_icon" src={delete_icon} onClick={() => this.deleteProduct(product.id)} />
                    </div>
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct(id){ 
        dispatch(deleteProduct(id))
    },  
    deleteShoppingCardProduct(id){ 
        dispatch(deleteShoppingCardProduct(id))
    },  
});

export default connect(null, mapDispatchToProps)(Products);

