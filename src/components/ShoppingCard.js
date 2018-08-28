import React from 'react';
import { connect } from 'react-redux';

import { setTotal } from '../store/buyer/actions';
import { deleteProduct } from '../store/buyer/actions';
import { showCheckout } from '../store/buyer/actions';

class ShoppingCard extends React.Component {

    setTotal = (price, id, action) => {
        this.props.setTotal(price, id, action);
    }

    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }

    showCheckout = () => {
        this.props.showCheckout();
    }

    render() {
        const { shoppingCard, total } = this.props;

        return (
            <div className="shoppingCard">
                <div className="shoppingCard_title">
                    Shopping Card
                </div>
                <div className="shoppingCard_products">
                    {shoppingCard.map(product => (
                    <div className="shoppingCard_product" key={product.id}>
                        <div className="shoppingCard_name">
                            <div className="shoppingCard_product_name">
                                {product.name}
                            </div>
                            <div onClick={() => this.deleteProduct(product.id)} className="shoppingCard_product_remove">
                                x
                            </div>
                        </div>
                        <div className="shoppingCard_product_price">
                            $ {product.price}
                        </div>
                        <div className="shoppingCard_product_count">
                            <div className="shoppingCard_count">
                                Count: {product.count}
                            </div>
                            <div onClick={() => this.setTotal(product.price, product.id, "add")} className="shoppingCard_add">
                                +
                            </div>
                            <div onClick={() => this.setTotal(product.price, product.id, "remove")} className="shoppingCard_remove">
                                -
                            </div>
                        </div>
                        <div className="shoppingCard_product_total">
                            Price: ${product.total}
                        </div>
                    </div>
                    ))}
                </div>
                {total > 0 && (
                    <div>
                        <div className="shoppingCard_products_total">
                            Total price: ${total}
                        </div>
                        <div className="shoppingCard_checkout">
                            <button onClick={this.showCheckout} className="checkout_button">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    setTotal(price, id, action){ 
        dispatch(setTotal(price, id, action))
    }, 
    deleteProduct(id){ 
        dispatch(deleteProduct(id))
    },
    showCheckout(){ 
        dispatch(showCheckout())
    },  
});

export default connect(null, mapDispatchToProps)(ShoppingCard);

