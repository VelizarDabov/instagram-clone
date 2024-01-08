import React from 'react'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const MiniProfile = () => {
  const [user] = useAuthState(auth);
const userName = user.displayName.split(' ').join('').toLowerCase();
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
   <img className='rounded-full border p-[2px] w-16 h-16'src={user.photoURL} alt='profile img'/>     
    <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{userName}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
    </div>
    <button className='text-blue-600 text-sm font-semibold'onClick={()=> auth.signOut()} >Sign out</button>
    </div>
  )
}

export default MiniProfile