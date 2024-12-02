import React from 'react'
import {
    ProfileMain,
} from '../styles/styledComponents'
import UserInfo from '../components/UserInfo'

const User = ({ currentUser, setCurrentUser, setToken, handleLogout }) => {
    return (
        <ProfileMain>
            <UserInfo
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setToken={setToken}
                handleLogout={handleLogout} />
        </ProfileMain>
    )
}

export default User
