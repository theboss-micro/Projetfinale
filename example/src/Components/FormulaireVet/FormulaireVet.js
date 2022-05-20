import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerVeto } from '../../JS/Actions/actionVeto';
import './FormulaireVet.css'
import {RiArrowGoBackFill} from 'react-icons/ri'



const FormulaireVet = () => {
  const [Nom, setNom] = useState("")
  const [Prenom, setPrenom] = useState("")
  const [Email, setEmail] = useState("")
  const [Telephone, setTelephone] = useState("")
  const [Adresse, setAdresse] = useState("")
  const [Ville, setVille] = useState("");
  const [Gouvernorat, setGouvernorat] = useState("");
  const [Pays, setPays] = useState("");
  const [CodePostal, setCodepostal] = useState("");
  const [Horaire, setHoraire] = useState("")
  const [Password, setPassword] = useState("")

  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const veto = useSelector(state=>state.list)
  console.log(veto)

  const add=()=>{
    dispatch(registerVeto({Nom, Prenom, Email, Telephone, Adresse, Ville, Gouvernorat, Pays,CodePostal, Horaire,Password}));
    setNom("")
    setPrenom("")
    setEmail("")
    setTelephone("")
    setAdresse("")
    setVille("")
    setGouvernorat("")
    setPays("")
    setCodepostal("")
    setHoraire("")
    setPassword("")



  }


        return <div>
    <br/>
      <h2> veuillez renseigner les informations du vétérinaire a ajouter </h2>
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
                    value={Nom}
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
                    value={Prenom}
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
                    value={Email}
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
                    value={Telephone}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Adresse</span>
             <input className='input'
                    type="text"
                    id="Adresse"
                    name="Adresse"
                    placeholder="Adresse *"
                    autoComplete="off"
                    onChange={(e)=>setAdresse(e.target.value)}
                    value={Adresse}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Ville</span>
             <input className='input'
                    type="text"
                    id="Ville"
                    name="Ville"
                    placeholder="Ville *"
                    autoComplete="off"
                    onChange={(e)=>setVille(e.target.value)}
                    value={Ville}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Gouvernorat</span>
             <input className='input'
                    type="text"
                    id="Gouvernorat"
                    name="Gouvernorat"
                    placeholder="Gouvernorat *"
                    autoComplete="off"
                    onChange={(e)=>setGouvernorat(e.target.value)}
                    value={Gouvernorat}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Pays</span>
             <input className='input'
                    type="text"
                    id="Pays"
                    name="Pays"
                    placeholder="Pays *"
                    autoComplete="off"
                    onChange={(e)=>setPays(e.target.value)}
                    value={Pays}
                    />
                    
            <div className='input-box'>
             <span className='details'>Code postal</span>
             <input className='input'
                    type="text"
                    id="Code-Postal"
                    name="Code-postal"
                    placeholder="90210 *"
                    autoComplete="off"
                    onChange={(e)=>setCodepostal(e.target.value)}
                    value={CodePostal}
                    />

           </div>          

           </div>
           <div className='input-box'>
             <span className='details'>Horaire</span>
             <input className='input'
                    type="text"
                    id="Horaire"
                    name="Horaire"
                    placeholder="HH/MMam - HH/MMpm *"
                    autoComplete="off"
                    onChange={(e)=>setHoraire(e.target.value)}
                    value={Horaire}
                    />

           </div>
           <div className='input-box'>
             <span className='details'>Password</span>
             <input className='input'
                    type="password"
                    id="Password"
                    name="Password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={Password}
                    />

           </div>
         </div>


         <div className='button'>
           <Link to={'/FindaVet'}>
         <input className='button' type="button" value="Register" onClick={add}/>
           </Link>

         </div>
       </form>
      </div>
                  
  </div>;
};

export default FormulaireVet;
