import * as actionTypes from './actions';
import {v4 as uuidv4} from "uuid";

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],

};

const reducer = (state = initialState, action) => {
    // console.log("reduceris: ", action.items);
    console.log(" reducer id: ", action);
    switch (action.type) {
        case actionTypes.ADD_ITEMS:
            return {
                ...state.items,
                items: [...state.items,
                        action.items]
            };
        case actionTypes.DELETE_ITEMS:
            const newArray = state.items.filter(item => item.id !== action.itemId);
            return {
                ...state.items,
                items: newArray
            };
        case actionTypes.EDIT_ITEMS:
            return {

            };
        default:
            return state
    }
};


export default reducer;