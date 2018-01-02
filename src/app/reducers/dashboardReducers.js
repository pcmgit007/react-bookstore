
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DASHDATA_SUCCESS':
      return action.book;
    default:
      return state;
  }
};
