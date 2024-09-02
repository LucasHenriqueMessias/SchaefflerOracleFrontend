//import logo from './logo.svg';
//import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import ExchangeArchives  from './components/Path/ExchangeArchives/ExchangeArchives';
import ExchangeOperations from './components/Path/ExchangeOperations/ExchangeOperations';
import ExchangeLogs from './components/Path/ExchangeLogs/ExchangeLogs';
import Groups from './components/Path/Groups/Groups';
import Sent from './components/Path/Sent/Sent';
import Queue from './components/Path/QueueProcedure/Queue';
import Procedures from './components/Path/Procedures/Procedures';
import Exceptions from './components/Path/Exceptions/Exceptions';
import Value from './components/Path/Value/Value';
import  Nav  from './components/navbar/nav.js';
import  ExchangeHosts  from './components/Path/ExchangeHosts/ExchangeHosts';
import  Home  from './components/Home/Home';

function App() {
  return (
    
    <Router>
        <Nav/>
        <Routes>
          <Route path="/menu-oracle-app"element={<Home/>}/>
          <Route path="/menu-oracle-app/ExchangeFiles/Arquivos" element={<ExchangeArchives/>}/>
          <Route path="/menu-oracle-app/ExchangeFiles/Hosts" element={<ExchangeHosts/>}/>
          <Route path="/menu-oracle-app/ExchangeFiles/Operacoes" element={<ExchangeOperations/>}/>
          <Route path="/menu-oracle-app/ExchangeFiles/Logs" element={<ExchangeLogs/>}/>
          <Route path="/menu-oracle-app/Email/Grupos" element={<Groups/>}/>
          <Route path="/menu-oracle-app/Email/Enviados" element={<Sent/>}/>
          <Route path="/menu-oracle-app/Manager/Queue" element={<Queue/>}/>
          <Route path="/menu-oracle-app/Manager/Procedures" element={<Procedures/>}/>
          <Route path="/menu-oracle-app/Excecoes/Excecoes" element={<Exceptions/>}/>
          <Route path="/menu-oracle-app/Excecoes/ExcecaoValor" element={<Value/>}/>
        </Routes>
      </Router>
      
      
  );
}

export default App;
