import {LIST_USER, DELETE_USER} from "../action/type";

const initState = [];
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case LIST_USER:
            return action.payload
        case DELETE_USER:
            return [...state]
        default:
            return state;
    }
};