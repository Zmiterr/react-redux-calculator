import './Main.css';
import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";

export default function Main(){


    return (
        <div className="calculator">
            <Display />
            <Buttons />
        </div>

    );
}
