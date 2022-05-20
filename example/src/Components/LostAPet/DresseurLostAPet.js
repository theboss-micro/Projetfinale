import React from 'react'

const DresseurLostAPet = () => {
  return (
    <div>
        <h3>une photo de l'annimale perdu</h3>
      <input type="file" name="image"  className="form-input"/>
      <span className='details'>Nom de l'annimale</span>
             <input className='input'
                    type="text"
                    id="Nom"
                    name="Nom"
                    placeholder="Nom *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />
                     <span className='details'>Recompoense</span>
             <input className='input'
                    type="text"
                    id="Recompense"
                    name="Recompense"
                    placeholder="Recompense *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />
                    <span className='details'>Telephone</span>
             <input className='input'
                    type="text"
                    id="Telephone"
                    name="Telephone"
                    placeholder="Telephone *"
                    autoComplete="off"
                    // onChange={(e)=>setAdresse(e.target.value)}
                    // value={Adresse}
                    />
      

    </div>
  )
}

export default DresseurLostAPet