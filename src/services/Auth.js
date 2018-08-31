import axios from 'axios'

export default class Auth{
  constructor(){
    axios.defaults.baseURL = 'http://localhost:8000/api/'
    this.setAuthorizationHeader()
  }
  
  isAuthenticated(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
  }

  login(email, password){ //prima email i pass
    return axios.post('auth/login', { email, password })
      .then((response) => {
        window.localStorage.setItem('token', response.data.access_token) //assess token se nalazi
        //u responsu, console loguj, window mozemo a i ne mora da pisemo 
        this.setAuthorizationHeader(response.data.access_token)
      })
  }

  setAuthorizationHeader(){
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] =  `Bearer ${token}`
    //tako se pravi taj header
  }
}

export const authService  = new Auth()