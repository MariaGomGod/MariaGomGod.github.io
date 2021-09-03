import './Header.sass';
import logo from '../images/logo.png';

export default function Header() {

    return (
        <div id="header">
            <a href="/">
                <img role="button" id="logo" src={logo} alt=""/>
            </a>
        </div>
    )
}