import './OperButtons.css';
import { connect } from 'react-redux';
import { calculate, changeNewNumIndex } from '../../../Redux/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import ClearButton from "../ClearButton/ClearButton";

function OperButtons(props){
    const handleEquals = () => {
        let calculation = eval(props.displayText);
        props.calculate(calculation.toString());
        props.changeNewNumIndex(0);
    }

    return(
        <>
            <div className="equals-container">
                <button className="equals" onClick={handleEquals}><FontAwesomeIcon icon={faEquals}/></button>
                <ClearButton />
            </div>

        </>

    )
}

const mapStateToProps = (state) =>{
    return{
        displayText: state.displayText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        calculate: (result) => dispatch(calculate(result)),
        changeNewNumIndex: (payload) => dispatch(changeNewNumIndex(payload))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OperButtons)

