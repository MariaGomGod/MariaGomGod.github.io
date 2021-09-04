import { faFacebook, faTwitter, faPaypal, faCcVisa, faCcMastercard, faCcAmex} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <>
            <footer>
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ACERCA&nbsp;DE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/jobs">EMPLEO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/term-and-conditions">CONDICIONES&nbsp;DE&nbsp;USO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/privacy">DECLARACIÓN&nbsp;DE&nbsp;PRIVACIDAD</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cookies">ACEPTACIÓN&nbsp;COOKIES</a>
                        </li>
                    </ul>
                    <p id="copyright" className="copyright">Copyright&nbsp;{new Date().getFullYear()}&nbsp;&copy;&nbsp;Planet&nbsp;Express</p>
                    <div id="socialNetworks">
                        <p>Síguenos en: 
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} /> 
                        </p>
                    </div>
                    <div id="payments">
                        <p>Pagos admitidos: 
                            <FontAwesomeIcon icon={faPaypal} />
                            <FontAwesomeIcon icon={faCcVisa} />
                            <FontAwesomeIcon icon={faCcMastercard} />
                            <FontAwesomeIcon icon={faCcAmex} />
                        </p>
                    </div>
                </nav>
            </footer>
        </>
    )
}