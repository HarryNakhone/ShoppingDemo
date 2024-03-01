const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.heeload;
      const indexOfExistItem = state.cartStorage.findIndex(
        (item) => item._id === newItem._id
      ); /// if not return -1

      if (indexOfExistItem !== -1) {
        const updatedExistItem = [...state.cartStorage];

        updatedExistItem[indexOfExistItem].quanity += 1;

        return {
          ...state,
          cartStorage: updatedExistItem,
        };
      } else {
        return {
          ...state,
          cartStorage: [...state.cartStorage, action.heeload],
        };
      }

    case "DELETE_FROM_CART":
      const chosenCartId = action.heeload;
      const sameProduct = state.cartStorage.find(
        (item) => item._id === chosenCartId
      );

      if (sameProduct.quanity > 1) {
        const newStorage = state.cartStorage.map((item) =>
          item._id === chosenCartId
            ? { ...item, quanity: item.quanity - 1 }
            : item
        );
        return {
          ...state,
          cartStorage: newStorage,
        };
      } else {
        return {
          ...state,
          cartStorage: state.cartStorage.filter(
            (item) => item._id !== action.heeload
          ),
        };
      }
    case "SEARCH_ITEM":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
