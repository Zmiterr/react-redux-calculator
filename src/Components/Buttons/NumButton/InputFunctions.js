//TODO move all this funtional to redux actions
const opRegex = /[\+\-\/\*]/;
const digitRegex = /\d/;
const whitespaceOrEqualsRegex = /\s+|=$/g;


export const handleDigit = (e, dt, ud, num) => {
    if (dt[dt.length - 1] == '-' && opRegex.test(dt[dt.length - 2])) {
        let parenthSubstr1 = dt.slice(0, dt.length - 1);
        let parenthSubstr2 = dt.slice(dt.length - 1);
        ud(parenthSubstr1 + "(" + parenthSubstr2 + num + ")");
    } else if (/\s+/.test(num)) {
        ud(e.target.value.replace(whitespaceOrEqualsRegex, ""));
    } else {
        ud(dt + num);
    }
}

export const handleOperator = (dt, ud, lz, cnni, nni, uda, symbol) => {
    if (symbol === '-' && dt.length === 0) {
        ud(symbol);
        cnni(0);
    } else if (symbol !== '-' && dt.length === 0) {
        ud("0" + symbol);
        lz(false);
        cnni(2);
    } else {
        ud(dt + symbol);
        uda(false);
        lz(false);
    }

}

export const removeDoubleOp = (dt, ud, symbol) => {
    if (opRegex.test(dt[dt.length - 2]) && symbol !== "-" && dt[dt.length - 2] !== "-") {
        let opSubstr1 = dt.slice(0, dt.length - 2);
        let opSubstr2 = dt.slice(dt.length - 1);
        let firstOpRemoved = opSubstr1 + opSubstr2;
        ud(firstOpRemoved);
    } else if (!digitRegex.test(symbol) && symbol !== "." && dt[dt.length - 2] === "-" && opRegex.test(dt[dt.length - 3])) {

        let opSubstr1 = dt.slice(0, dt.length - 3);
        let opSubstr2 = dt.slice(dt.length - 1);
        let firstOpRemoved = opSubstr1 + opSubstr2;
        ud(firstOpRemoved);
    } else if (opRegex.test(symbol) && dt[dt.length - 2] === "-" && dt.length > 2) {
        let opSubstr1 = dt.slice(0, dt.length - 2);
        let opSubstr2 = dt.slice(dt.length - 1);
        let firstOpRemoved = opSubstr1 + opSubstr2;
        ud(firstOpRemoved);
    } else if (opRegex.test(symbol && dt[dt.length - 2] === "-" && dt.length >= 2)) {
        let opSubstr1 = dt.slice(0, dt.length - 2);
        let opSubstr2 = dt.slice(dt.length - 1);
        let firstOpRemoved = opSubstr1 + opSubstr2;
        ud("0" + firstOpRemoved);
    }
}

export const updateNewNumberIndex = (cnni, nni, dt) => {
    const lastOperatorRegex = /[+\/*](?!.*[\+\/\*])/;
    const indexOfOperator = dt.search(lastOperatorRegex);
    const indexOfMinus = dt.lastIndexOf("-");
    if (indexOfOperator > indexOfMinus) {
        cnni(indexOfOperator + 1);
    } else if (indexOfMinus > 0 && dt[indexOfMinus - 1] !== "(" && indexOfMinus > indexOfOperator) {
        cnni(indexOfMinus + 1);
    } else if (indexOfMinus === 0) {
        cnni(indexOfMinus);
    } else if (dt[indexOfMinus - 1] === "(" && indexOfMinus > indexOfOperator) {
        cnni(indexOfMinus);
    } else if (!opRegex.test(dt)) {
        cnni(0);
    }

}

