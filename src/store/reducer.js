import * as actionTypes from './actions';
import {recordPriceHistory, recordQuantityHistory} from '../util';

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS:
            console.log({
                items: [...state.items,
                    action.items]
            });
            return {
                items: [...state.items,
                        action.items]
            };
        case actionTypes.DELETE_ITEMS:
            const newArray = state.items.filter(item => item.id !== action.itemId);
            return {
                items:
                    newArray
            };
        case actionTypes.EDIT_ITEMS:
            for (let i = 0; state.items.length > 0; i++) {
                if (state.items[i].id === action.item.id) {
                    recordQuantityHistory(action.item);
                    recordPriceHistory(action.item);
                    state.items[i] = action.item;
                    return {items: [...state.items]
                    }
                }
            }
             return state;
        default:
            return state
    }
};


export default reducer;