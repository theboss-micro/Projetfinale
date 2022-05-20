import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../spiner/loader'
import { userLogin } from '../../JS/Actions/ActionRegister'
import "./Connextion.css"
import { Navigate } from 'react-router-dom'


const Connextion = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const loading = useSelector(state => state.userReducer.loading)
  const isAuth = useSelector(state => state.userReducer.isAuth)

  const login = (e) => {
      const cred = { email, password }
      e.preventDefault();
      dispatch(userLogin(cred))
    setEmail('')
    setPassword('')
}

return loading ? (<Loader />) 
:isAuth? <Navigate to='/UserProfile' /> : (
    <div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign In</h3>


                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={login}
                >
                    Sign in
                </button>
              
                <p className="forgot-password text-right">Forgot password?</p>
            </form>
        </div>
    </div>
)
}


export default Connextion