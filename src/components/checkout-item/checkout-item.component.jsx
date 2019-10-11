import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quatity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img alt="item" src={imageUrl} />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quatity}</span>
		<span className="price">{price}</span>
		<div className="remove-button">&#10005;</div>
	</div>
);

export default CheckoutItem;