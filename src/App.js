import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'
import NovaEntrada from './pages/NovaEntrada/NovaEntrada'
import NovaSaida from './pages/NovaSaida/NovaSaida'
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