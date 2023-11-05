import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    items: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            name: "Product 2",
            price: 150,
            quantity: 1,
        },
        {
            id: 3,
            name: "Product 3",
            price: 200,
            quantity: 1,
        },
        {
            id: 4,
            name: "Product 4",
            price: 250,
            quantity: 1,
        },
        {
            id: 5,
            name: "Product 5",
            price: 300,
            quantity: 1,
        },
        {
            id: 6,
            name: "Product 6",
            price: 350,
            quantity: 1,
        },
        {
            id: 7,
            name: "Product 7",
            price: 400,
            quantity: 1,
        },
        {
            id: 8,
            name: "Product 8",
            price: 450,
            quantity: 1,
        },
        {
            id: 9,
            name: "Product 9",
            price: 500,
            quantity: 1,
        },
        {
            id: 10,
            name: "Product 10",
            price: 550,
            quantity: 1,
        },

    ],
    totalQuantity: 0,
    totalPrice: 0,
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.items.find((item) => item.id === id);
            if (product) {
                const existingItem = state.cart.find((item) => item.id === id);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    state.cart.push({ ...product, quantity });
                }
                state.totalQuantity += quantity;
                state.totalPrice += product.price * quantity;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find((item) => item.id === id);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                    state.totalQuantity--;
                    state.totalPrice -= item.price;
                    localStorage.setItem("cart", JSON.stringify(state.cart));
                }
            }
        },

        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const index = state.cart.findIndex((item) => item.id === id);
            if (index !== -1) {
                const removedItem = state.cart.splice(index, 1)[0];
                state.totalQuantity -= removedItem.quantity;
                state.totalPrice -= removedItem.price * removedItem.quantity;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
    },
});

export const { addToCart, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
