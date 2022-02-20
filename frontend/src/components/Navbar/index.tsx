import Logo  from 'assets/img/unifametro.png';
import './styles.css';

function Navbar() {

    return (

        <header>
            <nav className="container">
                <div className="sisgames-nav-content">
                    <h1>SISGAMES</h1>
                    <a href="http://www.unifametro.edu.br/" target="_blank" rel="noreferrer">
                        
                        <div className="sisgames-contact-container">
                            <img className='logo-unifametro'   src={Logo} alt="Unifametro_Logo" />
                            <p className="sisgames-contact-link"></p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    );
}

export default Navbar;