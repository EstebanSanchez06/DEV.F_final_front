import axios from 'axios'
const API_URL = 'http://localhost:3000/api/users/'

const register = async(userData) =>{
    const response = await axios.post(API_URL, userData)
    return response.data
}

const login = async(userData) =>{
    const response = await axios.post(API_URL+'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async()=>{
    localStorage.removeItem('user')
}

const authService = {
    register, 
    login,
    logout
}

export default authService