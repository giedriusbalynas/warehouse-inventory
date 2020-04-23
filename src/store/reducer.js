import * as actionTypes from './actions';

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
};

const reducer = (state = initialState, action) => {

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
            const editedArray =  state.items.filter(item => item.id !== action.item.id) ;
             return {
                ...state.items,
                items: editedArray.concat(action.item)
            };
        default:
            return state
    }
};


export default reducer;