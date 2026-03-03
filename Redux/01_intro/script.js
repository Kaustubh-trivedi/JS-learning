let reduxState = {
    count: 0,
    name: "Anurag"
};

function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return { ...state, count: state.count + 1 }
        case "dec":
            return { ...state, count: state.count - 1 }
        case "incby":
            return { ...state, count: state.count + action.payload }
        case "decby":
            return { ...state, count: state.count - action.payload }
        default:
            return state

    }
};

reduxState = reducer(reduxState, { type: "inc" })
reduxState = reducer(reduxState, { type: "inc" })
reduxState = reducer(reduxState, { type: "inc" })
reduxState = reducer(reduxState, { type: "incby", payload: 3 })
reduxState = reducer(reduxState, { type: "inc" })
reduxState = reducer(reduxState, { type: "dec" })
reduxState = reducer(reduxState, { type: "decby", payload: 3 })
console.log(reduxState)
