import React,{useState} from 'react'
import './FormulaireDresseur.css'
import { Link, useNavigate } from 'react-router-dom'
import {RiArrowGoBackFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
// import { USER_REGISTER } from '../../JS/Constants/ActionType'
import { userRegister } from '../../JS/Actions/ActionRegister'

const FormulaireDresseur = () => {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const registerDresseur = (e) => {
      const newUser = {nom,prenom,email,telephone,password}
      e.preventDefault();
      dispatch(userRegister(newUser));
      setNom('')
      setPrenom('')
      setEmail('')
      setTelephone('')
      setPassword('')
    }

  return (
    <div>
    <br/>
      <h2> veuillez renseigner les informations du dresseur </h2>
      <div className='container'>
      <div className='position'> 
       <div className='title'>Enregistrement</div>
       <div className='goback' title='goback'><button onClick={()=>navigate(-1)}><RiArrowGoBackFill/></button></div>
       </div>
       <form action='#'>
         <div className='user-details'>
           <div className='input-box'>
             <span className='details'>Nom</span>
             <input className='input'
                    type="text"
                    id="Nom"
                    name="Nom"
                    placeholder="Nom *"
                    autoComplete="off"
                    onChange={(e)=>setNom(e.target.value)}
                    value={nom}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Prenom</span>
             <input className='input'
                    type="text"
                    id="Prenom"
                    name="Prenom"
                    placeholder="Prenom *"
                    autoComplete="off"
                    onChange={(e)=>setPrenom(e.target.value)}
                    value={prenom}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Email</span>
             <input className='input'
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Email *"
                    autoComplete="off"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Téléphone</span>
             <input className='input'
                    type="text"
                    id="telephone"
                    name="Telephone"
                    placeholder="Telephone *"
                    autoComplete="off"
                    onChange={(e)=>setTelephone(e.target.value)}
                    value={telephone}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Password</span>
             <input className='input'
                    type="password "
                    id="Password"
                    name="Password"
                    placeholder="Password *"
                    autoComplete="off"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />

           </div>
         </div>


         <div className='button'>
           <Link to={'/'}>
         <input className='button' type="button" value="Register" onClick={registerDresseur}/>
           </Link>

         </div>
       </form>
      </div>
                  
  </div>
  )
}

export default FormulaireDresseur