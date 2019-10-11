import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
	selectorCartItems,
	selectorCartItemsCount
} from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemsCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});
//Селекторо Redux
const mapStateToProps = state => ({
	itemsCount: selectorCartItemsCount(state)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartIcon);
