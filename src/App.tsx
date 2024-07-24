import './App.css'
import { CustomFooter } from './componentes/custom-footer';
import { CustomHeader } from './componentes/custom-header';
import {LoginPage} from './pages/login-page'
import {CreatePage} from './pages/create-page'
import {WelcomePage} from './pages/wellcome-page'
import {NotFoundPage} from './pages/not-found-page'
import {ProtectedRoute} from './protected-route';
import { BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
//import imagem from './assets/Logotipo-vertical-azul-1024x1024.png';

 function App() {
 
  const handleLogout=()=>{
    localStorage.setItem('token','')
    window.location.href = '/login';
  }

  return (
   
    <div>
    <CustomHeader>
      <div>
        {/* <img src={imagem} alt="Logo" /> */}
      </div>
      <div onClick={handleLogout}>Logout</div>
      
    </CustomHeader>
      <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/wellcome" element={
        <ProtectedRoute><WelcomePage /></ProtectedRoute> } />
         <Route path="/" element={
        <ProtectedRoute><WelcomePage /></ProtectedRoute> } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    <CustomFooter>
    <p>Todos os direitos reservados</p></CustomFooter>
</div>
  )
}

export default App


