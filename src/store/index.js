import { createStore } from 'redux';

const initialState = {
  lists: [
    { name: 'testA', complete: false },
    { name: 'testB', complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DONE_LIST':
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) return list;
          return {
            ...list,
            complete: true,
          };
        }),
      };
    case 'DELETE_LIST':
      return {
        lists: state.lists.filter((list) => list.name !== action.payload),
      };
    case 'ADD_LIST':
      return {
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
