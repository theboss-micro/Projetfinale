import React,{Profiler, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import FindaVet from './Components/FindaVet/FindaVet';
import NavBar from './Components/NavBar/NavBar';
import FormulaireVet from './Components/FormulaireVet/FormulaireVet';
import Home from './Components/Home/Home';
import Card from './Components/FindaVet/Card';
import SearchVet from './Components/FindaVet/SearchVet';
import StarRating from './Components/RatingStar/StarRating'
import CreerUnCompte from './Components/CreerUnCompte/CreerUnCompte';
import Connextion from './Components/Connextion/Connextion';
import FormulaireDresseur from './Components/FormulaireDresseur/FormulaireDresseur';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './JS/Actions/ActionRegister';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserProfile from './Components/UserProfile/UserProfile'
import { GET_PROFILE_SUCCESS, USER_LOGIN } from './JS/Constants/ActionType';
import LostAPet from './Components/LostAPet/LostAPet';
import DresseurLostAPet from './Components/LostAPet/DresseurLostAPet'
import ParticulierFoundAPet  from './Components/LostAPet/ParticulierFoundAPet';


function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])
  
  console.log(isAuth)
  
  return (
    <div className="Example">
      
      <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/FindaVet' element={<FindaVet/>} />
      <Route path='/FormulaireVet' element={<FormulaireVet/>}/>
      <Route path='/Card/:nom' element={<Card/>}/>
      <Route path='/SearchVet' element={<SearchVet/>}/>
      <Route path='/login' element={<USER_LOGIN/>}/>

      <Route path='/StarRating' element={<StarRating/>}/>
      <Route path='/CreerUnCompte' element={<CreerUnCompte/>}/>
      <Route path='/Connextion' element={<Connextion/>}/>
      <Route path='/FormulaireDresseur' element={<FormulaireDresseur/>}/>
      <Route path='/UserProfile' element={<PrivateRoute  component={UserProfile} /> } />
      <Route path='/LostAPet' element={<LostAPet/>}/>
      <Route path='/DresseurLostAPet' element={<DresseurLostAPet/>}/>
      <Route path='/ParticulierFoundAPet' element={<ParticulierFoundAPet/>}/>
      </Routes> 
    </div>
  );
}

export default App;
