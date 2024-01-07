import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
   <img className='rounded-full border p-[2px] w-16 h-16'src='https://scontent.fsof9-1.fna.fbcdn.net/v/t39.30808-6/348610572_3128974100580964_386632649417346818_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZjyTxxQWzlIAX_2bRzE&_nc_ht=scontent.fsof9-1.fna&oh=00_AfAdhAGh0mqH5ZptsnS7n-zP1cAWhEgvWrBZ_znlR4IcaA&oe=659EBAE7' alt=''/>     
    <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Velizar Dabov</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
    </div>
    <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  )
}

export default MiniProfile