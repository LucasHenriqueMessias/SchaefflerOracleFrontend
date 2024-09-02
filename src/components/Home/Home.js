import React from 'react';
import '../../index.css'
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <div className="titleHomePage">
      <span>
        Seja bem-vindo!
      </span>
      <br/>
      <span>
        <strong>Internal IT Services</strong>
      </span>
    </div>
    <div className="centerContainer">
      <div>
        <Link to="/menu-oracle-app/ExchangeFiles/Arquivos"><button className='menuButton'>Arquivos do Exchange Files</button></Link>
        <Link to="/menu-oracle-app/ExchangeFiles/Hosts"><button className='menuButton'>Hosts do Exchange Files Service</button></Link>  
      </div>
      <div>
        <Link to="/menu-oracle-app/ExchangeFiles/Operacoes"><button className='menuButton'>Operações do Exchange Files</button></Link>
        <Link to="/menu-oracle-app/ExchangeFiles/Logs"><button className='menuButton'>Logs do Exchange Files</button></Link>    
      </div>
      <div>
        <Link to="/menu-oracle-app/Email/Grupos"><button className='menuButton'>Grupos de E-mail</button></Link>
        <Link to="/menu-oracle-app/Email/Enviados"><button className='menuButton'>E-mails Enviados</button></Link>
      </div>
      <div>
        <Link to="/menu-oracle-app/Manager/Queue"><button className='menuButton'>Job Manager</button></Link>
        <Link to="/menu-oracle-app/Manager/Procedures"><button className='menuButton'>Procedures</button></Link>
      </div>
        <Link to="/menu-oracle-app/Excecoes/Excecoes"><button className='menuButton'>Exceções</button></Link>
        <Link to="/menu-oracle-app/Excecoes/ExcecaoValor"><button className='menuButton'>Exceção x Valor</button></Link>
    </div>
  </div>
);

export default Home;