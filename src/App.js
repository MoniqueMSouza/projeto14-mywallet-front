import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import NovaEntrada from './pages/NovaEntrada'
import NovaSaida from './pages/NovaSaida'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/nova-entrada" element={<NovaEntrada/>}/>
            <Route path="/nova-saida" element={<NovaSaida/>}/>
        </Routes>
        </BrowserRouter>
    )
}