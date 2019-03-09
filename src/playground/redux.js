import { createStore } from 'redux';

// ACTIONS
const incrementCount = ({ incrementBy = 1 } = {}) => {
   return {
      type: 'INCREMENT',
      incrementBy: incrementBy
   };
}

const decrementCount = ({ decrementBy = 1} = {}) => {
   return {
      type: 'DECREMENT',
      decrementBy: decrementBy
   }
};

const resetCount = () => {
   return {
      type: "RESET",
   }
}

const setCount = ({ count = 0 } = {}) => {
   return {
      type: "SET",
      count: count
   };
};

// REDUX STORE 
const store = createStore((state = { count: 0 }, action) => {   
   if(action.type === "INCREMENT") {
      return {
         count: state.count + action.incrementBy
      };
   } else if(action.type === "DECREMENT") {
      return {
         count: state.count - action.decrementBy
      };
   } else if(action.type === "RESET") {
      return {
         count: 0
      };
   } else if(action.type === "SET") {
      return {
         count: action.count
      }
   } else {
      return state;
   }
});

store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 15 }));









// --------------------------------------------------------
// Destructuring

// const add = ({ a = 1, b = 2 } = {}) => {
//    return a + b;
// }

// console.log(add({ a: 1, b: 12 }));
// console.log(add(15, 14));



// const { a = 1, b = 2 } = {};
// console.log(a, b);


// const {x = 5, y = 5} = 15;
// console.log(x + y);

// const add = ({ a = 1, b = 2 }) => {
//    return a + b;
// }

// console.log(add({ a: 1, b: 12 }));
// console.log(add(15));
// console.log(add());





// const incrementCount = (by) => {
//    return {
//       type: 'INCREMENT',
//       incrementBy: by
//    };
// }


// const incrementCount = (payload= {}) => {
//    return {
//       type: 'INCREMENT',
//       incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
//    };
// }