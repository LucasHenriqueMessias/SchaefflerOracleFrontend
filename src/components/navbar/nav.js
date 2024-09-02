import React  from "react";
import '../../index.css'
import SchaefflerLogo from '../../icons/cc2197bc1be13300a810520e6e4bcbc4.jpg'
import { Link } from "react-router-dom";


const Nav = () => (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exchange Files
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/menu-oracle-app/ExchangeFiles/Arquivos">Arquivos do Exchange Files</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/ExchangeFiles/Hosts">Hosts do Exchange Files Service</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/ExchangeFiles/Operacoes">Operações do Exchange Files Service</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/ExchangeFiles/Logs">Logs Exchange Files Service</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            E-mail
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/menu-oracle-app/Email/Grupos">Grupos de E-mail</Link></li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/Email/Enviados">E-mails Enviados Pelo Sistema</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Job Manager
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/menu-oracle-app/Manager/Queue">Job Manager</Link></li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/Manager/Procedures">Procedures</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exceções
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/menu-oracle-app/Excecoes/Excecoes">Exceções</Link></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><Link className="dropdown-item" to="/menu-oracle-app/Excecoes/ExcecaoValor">Exceção x Valor</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link className="navbar-brand" to="/menu-oracle-app"><img src={SchaefflerLogo} alt="Schaeffler"></img></Link>
  </div>
</nav>
);

export default Nav;