import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from 'react-bootstrap'
import '../styles/MainNav.css'

export default function Logout() {
    const { logout } = useAuth()
    const [error, setError] = useState()
    const history = useHistory()



    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.replace('/')
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <div>
            <div className="logout-secondary">
          {error && <Alert variant='danger'>{error}</Alert>}
            </div>
            <Link className='login-links nav-item' onClick={handleLogout} to='/'>Log Out</Link>
        </div>
    )
}
