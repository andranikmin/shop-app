import React from 'react';
import { connect } from 'react-redux';

import { closePopup } from '../store/buyer/actions';

class Popup extends React.Component {

    render() {
        const { shoppingCard, total } = this.props;
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div className="checkout_container">
                        <div className="checkout_products">
                        {shoppingCard.map(product => (
                            <div className="checkout_product" key={product.id}>
                                <div className="shoppingCard_product_name">
                                    {product.name}
                                </div>
                                <div className="shoppingCard_product_price">
                                    ${product.price}
                                </div>
                                <div className="shoppingCard_count">
                                    Count: {product.count}
                                </div>
                                <div className="shoppingCard_product_total">
                                    Price: {product.total}
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="shoppingCard_products_total">
                            Total: ${total}
                        </div>
                        <button className="checkout_finish" onClick={this.props.closePopup}>
                            Buy
                        </button>
                    </div>
                </div>
                
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => ({
    closePopup() { 
        dispatch(closePopup())
    }, 
});

export default connect(null, mapDispatchToProps)(Popup);
