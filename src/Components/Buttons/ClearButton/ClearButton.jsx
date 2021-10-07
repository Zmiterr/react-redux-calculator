import './ClearButton.css';
import { connect } from 'react-redux';
import { clearDisplay} from '../../../Redux/Actions';

function ClearButton(props){
    return (
        <div className="clear-container">
            <button className="clear" onClick={props.clear}>AC</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => dispatch(clearDisplay())
    }}

export default connect(null, mapDispatchToProps)(ClearButton)
