import {connect} from "react-redux";
import View from './view';

const controller=connect(
    state=>({
        model: state.todos
    }),
    dispatch=>{
        return {
            dispatch:dispatch
        }
    })(View);

export default controller;