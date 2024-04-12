import React from 'react'
import {ChangeProfile} from "./ChangeProfile";
import { useContext } from 'react';
import { AppContext } from '../App';
export const Profile = () => {
  const {username}=useContext(AppContext);

  return (
    <div>
      {""}
      <h1>Username is : {username}</h1>
       <ChangeProfile /> 
    </div>
  )
}

export default Profile