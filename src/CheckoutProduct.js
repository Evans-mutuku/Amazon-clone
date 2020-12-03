import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import Flipmove from 'react-flip-move';

function CheckoutProduct({ id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

    const TopArticles = ({Article}) => (
        <Flipmove>
            {TopArticles.map(basket => (
                <Article key = {basket.id} {...basket} />
            ))}
        </Flipmove>
    )
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProject__title">{title}</p>
                <p className="checkoutProject__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
