import React from 'react';
import { connect } from 'react-redux';

import ShoppingCard from './ShoppingCard';
import Popup from './Popup';
import { addToShoppingCard } from '../store/buyer/actions';


class Buyer extends React.Component {
    
    addToShoppingCard = (product) => {
        this.props.addToShoppingCard(product);
    }

    render() {
        const { products, shoppingCard, total, checkout } = this.props;

        // if (!products.length) {
        //     return null;
        // }

        if (!products.length) {
            return(
                <div className="no_products">
                    There are not products to view.
                 </div>
            )
        }


        return (
            <div className="buyer">
                <div className="buyer_products">
                    {/* <div className="category">
                        <div className="category_tab">Show All</div>
                        <div className="category_tab">Toys</div>
                        <div className="category_tab">Flowers</div>
                        <div className="category_tab">Books</div>
                    </div> */}
                    {products.map(product => (
                        <div className="buyer_product" key={product.id}>
                            <div className="buyer_product_info">
                                <img className="buyer_product_image" src={require(`../assets/images/${product.type}.png`)} />
                                <div className="buyer_product_desc">
                                    <div className="buyer_product_name">
                                        {product.name}
                                    </div>
                                    <div className="buyer_product_type">
                                        {product.type}
                                    </div>
                                    <div className="buyer_product_price">
                                        $ {product.price}
                                    </div>
                                </div>
                            </div>
                            <div className="buyer_product_button" onClick={() => this.addToShoppingCard(product)}>
                                Buy
                            </div>
                        </div>
                    ))}
                </div>
                <ShoppingCard shoppingCard={shoppingCard} total={total}/>
                {checkout ? 
                    <Popup shoppingCard={shoppingCard} total={total}/>
                    : null
                }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { seller: { products }, buyer: { shoppingCard, total, checkout } } = state;

    return {
        products,
        shoppingCard,
        total,
        checkout
    };
};

const mapDispatchToProps = (dispatch) => ({
    addToShoppingCard(product){ 
        dispatch(addToShoppingCard(product))
    },  
});

export default connect(mapStateToProps, mapDispatchToProps)(Buyer);

