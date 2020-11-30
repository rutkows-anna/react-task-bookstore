import {
  BOOK_ADD_TO_CART,
  BOOK_REMOVE_FROM_CART,
  CLEAR_CART,
  SET_BOOKS,
  SET_LOADING,
  SET_ERROR,
  SET_ERROR_ORDER,
} from "./actionTypes";

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});
export const setLoading = () => ({
  type: SET_LOADING,
});
export const setError = () => ({
  type: SET_ERROR,
});
export const bookAdd = (book) => ({
  type: BOOK_ADD_TO_CART,
  payload: book,
});
export const bookRemove = (bookId) => ({
  type: BOOK_REMOVE_FROM_CART,
  payload: bookId,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});
export const setErrorOrder = () => ({
  type: SET_ERROR_ORDER,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(setLoading());
  fetch("http://localhost:3001/api/book")
    .then((response) => response.json())
    .then((books) => {
      dispatch(setBooks(books.data));
    })
    .catch((error) => {
      dispatch(setError());
    });
};

export const fetchOrder = (data) => (dispatch) => {
  fetch("http://localhost:3001/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return dispatch(clearCart());
      } else {
        dispatch(setErrorOrder());
      }
    })
    .catch((error) => {
      dispatch(setErrorOrder());
    });
};
