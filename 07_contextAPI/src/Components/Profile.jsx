import React ,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user,name}=useContext(UserContext);

   if(!user)
   {
    return <div>Please Login</div>
   }
   return <div>Welcome {user.username}</div>
}

export default Profile
