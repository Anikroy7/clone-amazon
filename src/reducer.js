export const initialState = {
    basket: [],
}


export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const i = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (i >= 0) {
                newBasket.splice(i, 1);
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;