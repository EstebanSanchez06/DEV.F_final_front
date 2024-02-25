import axios from 'axios'
const API_URL = 'http://localhost:3000/api/movies/'

const createMovie = async (movieData, token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,'create', movieData, config)
    return response.data
}

const getMovie = async (title,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,title, config)
    return response.data
}

const deleteMovie = async (id, token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'delete', id, config)
    return response.data
}

const updateMovie = async(id,body, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = axios.post(API_URL+'update', id, body,config)
    return response.data
}

const movieService = {
    createMovie,
    getMovie,
    deleteMovie,
    updateMovie
}

export default movieService