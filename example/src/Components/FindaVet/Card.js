import React, {useState} from 'react'
import './Card.css'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import StarRating from '../RatingStar/StarRating'

const Card = () => {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [Adresse, setAdresse] = useState('')

    const listVeto = useSelector(state=>state.ReducerRegister.listVeto)

    const params = useParams()

    const viterinaire = listVeto.find(el=>el.Nom===params.nom)


  return (
    // <div className='Card'>
    // <div className='upper-container'>
    //    <div className='image-container'>
    //        <img src='' alt='' height='100px' width='100px'/>
    //        </div> 
    // </div>
    <div className='lower-container'>
        <h3>{viterinaire.Nom}</h3>
        <h4>{viterinaire.Prenom}</h4>
        <h5>{viterinaire.Adresse}</h5>
        <StarRating/>
       
        
    </div>
// </div>
  )
}

export default Card
