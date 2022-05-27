import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type:'DECREMENT',
  decrementBy
});

const setCount = ({count}={}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

// reducer!
// 1 is a pure fucntion: no depende de externos
// 2 never change state or action

const reducer = (state = {count: 0}, action)=> {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  };
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

// Actions: onject get sent to store
// increment, decrement, reset

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: -101}));