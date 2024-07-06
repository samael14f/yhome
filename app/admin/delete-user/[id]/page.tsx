'use client'

import apiService from '@/app/services/apiService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
export type UserType = {
  
  id : string;
  name : string;
  avatar : string;
  email : string;
  is_superuser : boolean;
  
}

const DeleteUser = ({params}: { params: {id: string }}) =>{
  
  const router = useRouter()
  const deleteUser = async() =>{
    const response = await apiService.del(`/api/admin/delete-user/${params.id}`)
    if (response.success){
       router.push(`/admin/users/`)
    }
  }
  
  
  return (
    
    <div>
    
      <div className="p-10 flex flex-col shadow border border-gray-300 items-center " >

        <div>
        
        <p className=" text-xl font-bold text-gray-950 "> Are you sure ,you want to delete this account ?
        </p>
        
        <div className="flex justify-end items-center space-x-8 me-4 my-4">
        
          <Link href={`/admin/user/${params.id}`}>      <p className="px-4 py-2 bg-slate-700 text-gray-50 text-xl font-bold "> cancel </p>
            </Link>
            
            
            <button className="px-4 py-2 bg-red-600 text-gray-100 text-xl font-bold "
            onClick={()=>deleteUser()}>
                delete
            </button>
        </div>
         
        </div>
        
      </div>
    
    </div>
    
    
    )
  
}

export default DeleteUser;