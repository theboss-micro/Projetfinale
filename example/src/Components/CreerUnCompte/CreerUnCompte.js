import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../CreerUnCompte/Shadow.png'
import "./CreerUnCompte.css"
import {RiArrowGoBackFill} from 'react-icons/ri'


const CreerUnCompte = () => {
  

    const navigate = useNavigate()
    
  return (
    <div class="contact-form">
    <h2>inscrivez vous </h2>
    <h4>c'est gratuit</h4>
   
        <div  style={{textAlign:"center"}} >
           
            <img src={logo} height="50%" width="40%"/>
              
            
            <p>Veuillez choisir je suis un:</p>
            <div className='goback' title='goback'><button onClick={()=>navigate(-1)}><RiArrowGoBackFill/></button></div>

            <input type="radio" id='contactChoise1' name='contact' value="veterinaire" onClick={()=>navigate('/FormulaireVet')}></input>
            <label for="contactChoice1">veterinaire</label>
            <input type="radio" id='contactChoise1' name='contact' value="dresseur" onClick={()=>navigate('/FormulaireDresseur')}></input>
            <label for="contactChoice1">dresseur</label>
    
                    
        </div>

</div>
  )
}

export default CreerUnCompte
