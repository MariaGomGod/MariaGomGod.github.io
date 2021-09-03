import './Footer.sass';

export default function Footer() {
    return (
        <>
            <footer role="contentinfo" aria-relevant="removals">
                <nav id="navbar">
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ACERCA&nbsp;DE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/empleo">EMPLEO</a>
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
                </nav>
            </footer>
        </>
    )
}