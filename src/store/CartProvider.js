import CartContext from '/cart-context';

const CartProvider = props => {
    addItemToCartHandler = item => {}
    removeItemToCartHandler = id => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;