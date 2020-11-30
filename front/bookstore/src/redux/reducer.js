import * as actions from "./actionTypes";

const initialState = {
  books: [],
  error: false,
  loading: false,
  cart: [],
  errorOrder: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case actions.SET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        loading: true,
        books: [],
      };
    case actions.BOOK_ADD_TO_CART:
      const index = state.cart.findIndex(
        (item) => item.book.id === action.payload.id
      );
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, { book: action.payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
    case actions.BOOK_REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.book.id !== action.payload),
      };
    case actions.CLEAR_CART:
      return {
        ...state,
        cart: [],
        errorOrder: false,
      };
    case actions.SET_ERROR_ORDER:
      return {
        ...state,
        errorOrder: true,
      };
    default:
      return state;
  }
};

export default reducer;
