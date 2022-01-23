export const addItemToCart = (cartIterms, cartItemToAdd) => {
    const existingCartItem = cartIterms.find(
        cartIterm => cartItemToAdd.id == cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartIterms.map(cartIterm => 
            cartIterm.id == cartItemToAdd.id
             ? { ...cartIterm, quantity: cartIterm.quantity + 1}
             : cartIterm
        )
    }

    return [...cartIterms, { ...cartItemToAdd, quantity: 1 }]
}