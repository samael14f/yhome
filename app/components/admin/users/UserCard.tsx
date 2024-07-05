'use client'

import UserType from './Users'
import { useRouter } from "next/navigation";
import Image from "next/image";

const UserCard:React.FC<UserType> = ({user}) =>{
  
  const router = useRouter();
  
  return (
    <div className='mb-4 border border-gray-200 shadow rounded px-2 py-1 space-x-2 flex items-center' onClick = {()=>router.push(`/admin/user/${user.id}`)}>
      <div className='p-1 w-10 h-10 bg-gray-100 rounded-full text-center'>
        img
      </div>
      <div className="flex w-full justify-between items-center p-1 ">
        <div className='flex flex-col space-y-1'>
          <p className="text-base  text-bold text-gray-800 ">{user.name}</p>
          <p className="text-sm text-semibold text-gray-500">{user.email}</p>
        </div>
      {user.is_superuser?(
         <div className=" p-1 bg-green-500 border border-green-200 text-green-500 font-semibold text-sm rounded-full w-2  ">
            
         </div>
      ):(
        <div className=" p-1 bg-red-500 border border-red-200 text-red-500 font-semibold text-sm rounded-full w-2">
            
         </div>
        )
      }
      </div>
      
    </div>
    
    )
}

export default UserCard;