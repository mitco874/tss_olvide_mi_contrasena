import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  LoginForm,
  NavBar,
} from '../../components';
import { existLogedUser } from '../../helpers';
import {
  LandingPage,
  RegisterPage,
} from '../../pages';

export const NoAuthenticatedRoutes = () => {
  return (
    <div>
        <NavBar/>
        <div className="main-content mt-5">
        <Routes>
        <Route path="" element={existLogedUser()?<Navigate to="/clases"/>:<LandingPage/>}/>
          <Route path="inicio-sesion" element={<LoginForm/>}/>
          <Route path="registro" element={<RegisterPage/>}/> 
        </Routes>  
        </div>
    </div>
  )
}