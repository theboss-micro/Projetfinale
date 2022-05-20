import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { veterinaireDelete } from '../../JS/Actions/ActionRegister'
import {getVeto, updateProfile} from '../../JS/Actions/actionVeto'



const UserProfile = () => {
  const {loading, listVeto,user} = useSelector (state=> state.ReducerRegister)
  const [showedit, setShowedit] = useState(false)
const dispatch = useDispatch()
const handleEdit=()=>{
  setShowedit(true)
  
}
const [searchByName, setSearchByName] = useState('');

const profile=useSelector(state=>state.userReducer.user)

const [newUser, setNewUser] = useState({
  Nom: user && user.Nom,
  Prenom: user && user.Prenom,
  Email: user && user.Email,
  Telephone: user && user.Telephone,
  Adresse: user && user.Adresse,
  Ville: user && user.Ville,
  Gouvernorat:user && user.Gouvernorat,
  Pays:user && user.Pays,
  CodePostal:user && user.CodePostal,
  Horaire:user && user.Horaire,

})

const handelChange = (e) => {
setNewUser({ ...newUser, [e.target.name]: e.target.value })
}

    return (
        <div className="auth-wrapper">
      <div className="auth-inner">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="Admin"
            className="rounded-circle"
            width="150"
          />
          <div className="mt-3">
            <h4>{user.Nom}</h4>
            <p className="text-secondary mb-1">{user.Prenom}</p>
            <p className="text-secondary mb-1">welcome</p>
            <p className="text-muted font-size-sm">{user.Email}</p>
            <button className="btn btn-primary" onClick={()=>dispatch(veterinaireDelete(user._id))}>Delete</button>
            <button className="btn btn-outline-primary"onClick={handleEdit}>Edit</button>
          </div>
          <div>

          {showedit?<div>
            
    <thead>
      <tr>
       
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
       
     
      </tr>
    </thead>
    <tbody>
              
             <tr > 
            
             
             <td><input type="text" name="Nom"  onChange={handelChange}  /></td>
             <td><input type="text" name="Prenom" value={newUser.Prenom} onChange={handelChange} /></td>
             <td><input type="text" name="Email" value={newUser.Email} onChange={handelChange} /></td>
             <td><input type="text" name="Telephone" value={newUser.Telephone} onChange={handelChange} /></td>
             <td><input type="text" name="Adresse" value={newUser.Adresse} onChange={handelChange} /></td>
             <td><input type="text" name="Ville" value={newUser.Ville} onChange={handelChange} /></td>
             <td><input type="text" name="Gouvernorat" value={newUser.Gouvernorat} onChange={handelChange} /></td>
             <td><input type="text" name="Pays" value={newUser.Pays} onChange={handelChange} /></td>
             <td><input type="text" name="CodePostal" value={newUser.CodePostal} onChange={handelChange} /></td>
             <td><input type="text" name="Horaire" value={newUser.Horaire} onChange={handelChange}  /></td>
             <td>{<button onClick={() => { dispatch(updateProfile(user._id, newUser))}}>save</button>}</td>
             
           </tr>
          
    

    </tbody>



    
   

          </div>:null}
          </div>
        </div>
      </div>
    </div>
    )
}

export default UserProfile