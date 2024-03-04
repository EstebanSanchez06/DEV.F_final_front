import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.auth)

    const onLogout = ()=>{
        dispatch(logout())
        dispatch(reset())
    }
    return (
    <div>Header</div>
  )
}

export default Header