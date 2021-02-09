
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import todos from "../components/Todos/model";
import GlobalModel from "global-model";
console.log(GlobalModel)
const reducer = (state, action) => {
    console.log(action);
    
    if(state){
        return state.gReducer(action);

    }else{
        return new GlobalModel(
            false,
            "app",
            {
                todos: todos("app").gInitialValue,
            },
            {
                todos: todos("app").gStructure,
            },
        ).gReducer(action);
    }
};

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

store.subscribe(()=>{
    console.log("sToRe",store.getState())
});

console.log("sToRe",store.getState());

export default store;