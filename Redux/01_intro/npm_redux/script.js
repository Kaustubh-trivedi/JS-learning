import { createStore } from "redux";
// console.dir(createStore);

const initialState = {
    post: 0,
    name: "Anurag",
    age: 56
}

function reducer(state = initialState, action) {  //initial state is set
    switch (action.type) {
        case "inc":
            return { ...state, post: state.post + 1 }
        case "dec":
            return { ...state, post: state.post - 1 }
        case "incby":
            return { ...state, post: state.post + action.payload }
        case "decby":
            return { ...state, post: state.post - action.payload }
        default:
            return state
    }
}

let store = createStore(reducer);

console.log(store)
// OUTPUT of store is
// @@observable: ƒ observable()
// dispatch: ƒ dispatch(action)
// getState: ƒ getState()
// replaceReducer: ƒ replaceReducer(nextReducer)
// subscribe: ƒ subscribe(listener)

console.log(store.getState())  // for getting state

//dispatch
store.dispatch({ type: "inc" })
store.dispatch({ type: "incby", payload:45 })
console.log(store.getState())
