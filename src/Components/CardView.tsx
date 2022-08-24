import React from 'react'
import avatar from '../assets/u2.png';
import editButton from '../assets/edit.svg';
import token from '../assets/token.png';
import Card from './Card';

const CardView: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
        {/* Profile Card */}
       <div className='bg-[#FCD0A1]/20 flex items-center justify-between mx-[2rem] sm:mx-0
        lg:gap-[26.3rem] md:gap-[10rem]  max-w-[1000px]
       rounded-[20px] h-[15rem] py-4 px-10 flex-wrap'>
         <div className='relative flex justify-center items-center'>
            <img 
            src={avatar} 
            alt=""   
            className='w-[5.5rem] h-[5.5rem] 
            first-line: hover:cursor-pointer '
            />

            <img 
            src={editButton} 
            alt="" 
            className='absolute top-16 left-16 hover:cursor-pointer'
            />
            
            <h1 className='text-[#67008C]/50 font-normal md:text-2xl text-xl ml-3'>Deon Atricks</h1>
         </div>

          <div className='flex flex-col'>
             <h4 className='text-black font-bold '>Token Balance</h4>

             <div className='flex items-center justify-center mt-6'>
             <img 
                src={token} 
                alt="" 
                className='w-[40px] h-[40px]'
            /> 
             <h4 className='text-[#9300C4] text-xl font-bold ml-1 '>50000</h4>
             </div>

          </div>
       </div>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:gap-x-20 
       gap-y-8 gap-x-8'>
         <Card />
         <Card />
         <Card />
       </div>

    </div>
  )
}

export default CardView