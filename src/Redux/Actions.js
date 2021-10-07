export const CHANGE_DISPLAY = "changeDisplay";
export const CLEAR_DISPLAY = "clearDisplay";
export const UPDATE_DECIMAL_ACTIVE = "updateDecimalActive";
export const EQUALS = "equals";
export const LEADING_ZERO = "leadingZero";
export const CHANGE_NEW_NUM_INDEX = "changeNewNumIndex";



export function changeDisplay(newText){
    return {
        type: CHANGE_DISPLAY,
        newText
    }
}

export function clearDisplay(){
    return{
        type: CLEAR_DISPLAY
    }
}

export function updateDecimalActive(payload){
    return {
        type: UPDATE_DECIMAL_ACTIVE,
        payload
    }
}

export function calculate(result){
    return {
        type: EQUALS,
        result
    }
}


export function leadingZero(payload){
    return{
        type: LEADING_ZERO,
        payload
    }
}


export function changeNewNumIndex(payload){
    return{
        type: CHANGE_NEW_NUM_INDEX,
        payload
    }
}
