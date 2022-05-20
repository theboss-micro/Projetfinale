import React from 'react'
import {BsFillGeoAltFill} from 'react-icons/bs'


const ParticulierFoundAPet = () => {
  return (
    <div>
        <h3>une photo de l'annimale perdu</h3>
      <input type="file" name="image"  className="form-input"/>
      <br/>
      <a title='localisation'><BsFillGeoAltFill/></a>

             <span className='details'>Adresse</span>
             <input className='input'
                    type="text"
                    id="Adresse"
                    name="Adresse"
                    placeholder="Adresse *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />
               <span className='details'>Ville</span>
             <input className='input'
                    type="text"
                    id="Ville"
                    name="Ville"
                    placeholder="Ville *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />
                     <span className='details'>Gouvernorat</span>
             <input className='input'
                    type="text"
                    id="Gouvernorat"
                    name="Gouvernorat"
                    placeholder="Gouvernorat *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />      

    </div>
  )
}

export default ParticulierFoundAPet