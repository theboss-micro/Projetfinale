import React,{useState, useEffect} from 'react'
import './FindaVet.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import SearchVet from './SearchVet'
import StarRating from '../RatingStar/StarRating'
import { getVeto } from '../../JS/Actions/actionVeto'

const FindaVet = () => {
  const [searchByName, setSearchByName] = useState('');
  const [searchByRate, setSearchByRate] = useState(1)

  const listVeto = useSelector(state=>state.ReducerRegister.listVeto)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const getAllVeto=()=>{
    dispatch(getVeto())
  }

  useEffect(() => {
    getAllVeto()
  }, [])
  

  
  
  return (
    <div>
    <br/>
    <h2>Trouver le vétérinaire le plus prés de chez vous</h2>
    <SearchVet
     setSearchByName={setSearchByName}
    />
    <table className="tableaux-style" searchByName={searchByName}>
    <thead>
      <tr>
        <th>Photo</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Telephone</th>
        <th>Adresse</th>
        <th>Ville</th>
        <th>Gouvernorat</th>
        <th>Pays</th>
        <th>Code Postal</th>
        <th>Horaire</th>
        <th>avis</th>
     
      </tr>
    </thead>
    <tbody>{listVeto
    .filter(el=>el.Nom.toLowerCase().includes(searchByName.toLowerCase().trim()))
    .map(el=>(
              
             <tr onClick={()=>navigate(`/Card/${el.Nom}`)}> 
            
             <td>{el.Photo}</td>  
             <td>{el.Nom}</td>
             <td>{el.Prenom}</td>
             <td>{el.Email}</td>
             <td>{el.Telephone}</td>
             <td>{el.Adresse}</td>
             <td>{el.Ville}</td>
             <td>{el.Gouvernorat}</td>
             <td>{el.Pays}</td>
             <td>{el.CodePostal}</td>
             <td>{el.Horaire}</td>
             <td>{<StarRating/>}</td>
             
           </tr>
          
    ))}

    </tbody>



    
    </table>
    <br/>
    <h6>vous connaissez un vétérinaire qui n'est pas dans la liste? Nous serons ravis vous l'ajouter depuis ce <Link to={'/FormulaireVet'}> <a>lien</a> </Link></h6>
</div>
  )
}

export default FindaVet
