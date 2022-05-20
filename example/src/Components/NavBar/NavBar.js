import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../NavBar/Shadow.png'
import './NavBar.css'
import { MdLocalHospital } from 'react-icons/md';
import {SiTinder} from 'react-icons/si'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {RiFindReplaceFill} from 'react-icons/ri'
import {GiWantedReward} from 'react-icons/gi'
import { useSelector ,useDispatch } from 'react-redux';
import { logout } from '../../JS/Actions/ActionRegister';

const NavBar = () => {
  const isAuth = useSelector(state=>state.userReducer.isAuth)
  const dispatch = useDispatch()

  return <div>
      <div>
         {
             !isAuth? (<nav>  
             <img className='Logo' src={Logo} />
            <ul>        
               <Link to={'/'}>     <li><a title='Home'>Home</a></li></Link>
               <Link to={'/FindaVet'}> <li><a title='find a Vet'><MdLocalHospital/></a></li></Link>
               <Link to={'/LostAPet'}> <li><a title='lost a Pet'><GiWantedReward/></a></li></Link>
                   <li><a title='Match a Pet'><SiTinder/></a></li>
                   <li><a title='find a Pet'><RiFindReplaceFill/></a></li>
                   <li><a title='Animalerie'><MdOutlineLocalGroceryStore/></a></li>
               <Link to={'/LOGOUT'}>   <li><a>Login</a></li></Link> 
                   <li><a>subscribe</a></li>
            </ul>
             
                 
        
         </nav>        ):
         
                <div class="dropdown">
                        <nav>  
                            <img className='Logo' src={Logo} />
                      <ul>        
                              <Link to={'/'}>     <li><a title='Home'>Home</a></li></Link>
                              <Link to={'/FindaVet'}> <li><a title='find a Vet'><MdLocalHospital/></a></li></Link>
                              <Link to={'/LostAPet'}> <li><a title='lost a Pet'><GiWantedReward/></a></li></Link>
                                  <li><a title='Match a Pet'><SiTinder/></a></li>
                                  <li><a title='find a Pet'><RiFindReplaceFill/></a></li>
                                  <li><a title='Animalerie'><MdOutlineLocalGroceryStore/></a></li>
                              <Link to={'/UserProfile'}>   <li><a>Profile</a></li></Link> 

                              <Link to='/' onClick={()=>dispatch(logout())}>   <li><a>logout</a></li></Link> 
                                  <li><a>subscribe</a></li>
                    </ul>
                            
                                
                       
                        </nav>        
                </div>            
             }
        </div>
  
  </div>;
};

export default NavBar;

