import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const LostAPet = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h3>signaler un annimale perdu</h3>
      <h2>je suis un</h2>
      <input type="radio" id='contactChoise1' name='contact' value="Dresseur" onClick={()=>navigate('/DresseurLostAPet')}></input>
      <label for="contactChoice1">Dresseur</label>
      <input type="radio" id='contactChoise1' name='contact' value="Particulier" onClick={()=>navigate('/ParticulierFoundAPet')} ></input>
      <label for="contactChoice1">Particulier</label>
      
    </div>
  )
}

export default LostAPet