import './Display.css';
import {connect} from 'react-redux';

function Display(props) {
    return (
        <input className='display' type='text' placeholder={0} value={props.displayText}/>
    )
}
const mapStateToProps = (state) => {
    return {
        displayText: state.displayText
    };
}

export default connect(mapStateToProps)(Display)
