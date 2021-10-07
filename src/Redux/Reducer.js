
import { CHANGE_DISPLAY,
    CLEAR_DISPLAY,
    EQUALS,
    LEADING_ZERO,
    CHANGE_NEW_NUM_INDEX,
    UPDATE_DECIMAL_ACTIVE  } from './Actions';



const initState = {
    isDecimalActive: false,
    leadingZeroActive: false,
    displayText: "",
    newNumIndex: 0
}

export default function rootReducer(state = initState, action){
        switch(action.type){
            case CHANGE_DISPLAY:
            return {...state, displayText: action.newText}
            case CLEAR_DISPLAY:
            return initState;
            case UPDATE_DECIMAL_ACTIVE:
            return {...state, isDecimalActive: action.payload}
            case LEADING_ZERO:
            return {...state, leadingZeroActive: action.payload}
            case EQUALS:
            return {...state, displayText: action.result}
            case CHANGE_NEW_NUM_INDEX:
            return {...state, newNumIndex: action.payload}
            default:
            return state;
        }

}


