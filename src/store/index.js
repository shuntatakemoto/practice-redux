import { createStore } from 'redux';

const initialState = {
  lists: [
    { name: 'testA', complete: false },
    { name: 'testB', complete: false },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
