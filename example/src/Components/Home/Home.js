import React, {useState} from 'react'
import logos from "../../Shadow.png"
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [logo, setLogo] = useState(false)
  return (
    <div>
        <h1>welcome Home</h1>
        <div className='cadre'>
          <div className='logos'><a onClick={()=>setLogo(!logo)}><img src={logos}/></a></div>
          {logo && (<div className="fixbouton">
         
         <Link to={"/CreerUnCompte"} >
             <a className="creer" >S'inscrire</a>
         </Link> 
     <br/>
     <br/>
         <Link to={"/Connextion"}>   
          <a className="connextion" >s'identifier</a>
          </Link>
    
    </div>)}
          </div>
             
    </div>
  )
}

export default Home