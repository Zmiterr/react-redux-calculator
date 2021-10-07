import './NumButton.css';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { changeDisplay, updateDecimalActive, changeNewNumIndex, leadingZero} from '../../../Redux/Actions';
import { handleDigit, handleOperator, removeDoubleOp, updateNewNumberIndex } from './InputFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes, faDivide } from '@fortawesome/free-solid-svg-icons';


function NumButtons(props){

    const numButtons = [
        {id: 'seven', digit: 7},
        {id: 'eight', digit: 8},
        {id: 'nine', digit: 9},
        {id: 'four', digit: 4},
        {id: 'five', digit: 5},
        {id:'six', digit: 6},
        {id: 'one', digit: 1},
        {id: 'two', digit: 2},
        {id: 'three', digit: 3},
        {id: 'zero', digit: 0}
    ];

    const operationButtons = [
        {id: 'add', icon: faPlus, symbol: '+'},
        {id:'subtract', icon: faMinus, symbol: '-'},
        {id: 'divide', icon: faDivide, symbol: '/'},
        {id: 'multiply', icon: faTimes, symbol: '*'},
        // {id: 'm-lus', symbol: 'M+'},
        // {id: 'm-minus', symbol: 'M-'}
    ];

    const operationBtnRef = useRef([]);

    const handleNumButtons = (e) => {
        handleDigit(e, props.displayText, props.updateDisplay, e.target.innerText, props.isDecimalActive);
    }

    const handleOpButtons = (e) => {
        handleOperator(props.displayText, props.updateDisplay, props.leadingZero, props.changeNewNumIndex,
            props.newNumIndex, props.updateDecimalActive, e.currentTarget.attributes[2].value, props.isDecimalActive);
    }

    const handleOpMouseUp = (e) => {
        removeDoubleOp(props.displayText, props.updateDisplay, e.currentTarget.attributes[2].value);
        updateNewNumberIndex(props.changeNewNumIndex, props.newNumIndex, props.displayText);
    }

    return(
        <>
            <div className="num-buttons-container">
                {numButtons.map((btn, index)=><button className="numButtons"
                                                      onMouseDown={handleNumButtons}  key={index} id={btn.id}>{ btn.digit}</button>)}
            </div>

            <div className="op-buttons-container">
                {operationButtons.map((btn, index)=> <button className="opButtons"
                                                             ref={(el)=>operationBtnRef.current[index] = el}
                                                             onMouseDown={handleOpButtons} onMouseUp={handleOpMouseUp}
                                                             id={btn.id} key={btn.id} symbol={btn.symbol} >
                    <FontAwesomeIcon icon={btn.icon} /> </button>)}
            </div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        isDecimalActive: state.isDecimalActive,
        displayText: state.displayText,
        newNumIndex: state.newNumIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplay: (payload) => dispatch(changeDisplay(payload)),
        updateDecimalActive: (payload) => dispatch(updateDecimalActive(payload)),
        changeNewNumIndex: (payload) => dispatch(changeNewNumIndex(payload)),
        leadingZero: (payload)=>dispatch(leadingZero(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumButtons);
