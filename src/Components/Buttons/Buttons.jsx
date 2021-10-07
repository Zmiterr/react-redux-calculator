import './Buttons.css';
import OperButtons from './OperButtons/OperButtons';

import NumButtons from "./NumButton/NumButton";

export default function Buttons(){
    return(
        <>
            <NumButtons />
            <OperButtons />
        </>
    )
}
