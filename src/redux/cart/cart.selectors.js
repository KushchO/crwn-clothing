import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectorCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);
export const selectorCartItemsCount = createSelector(
	[selectorCartItems],
	cartItems =>
		cartItems.reduce(
			(accamulatedQuantity, cartItem) =>
				accamulatedQuantity + cartItem.quantity,
			0
		)
);
