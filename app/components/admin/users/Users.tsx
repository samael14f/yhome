'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'
import UserCard from './UserCard'
import Link from 'next/link'


export type UserType = {
  
  id : string;
  name : string;
  avatar_url : string;
  email : string;
  is_superuser : boolean;
  
}
const Users = () =>{
  const [users,setUsers] = useState<UserType[]>([]);
  const getData = async () =>{
    const users1 = await apiService.get(`/api/admin/`);
    
    setUsers(users1)
     }
  
  useEffect(()=>{
    getData();
  },[]);
  
  return(
    
    <div className="p-4">
    <div className="flex items-center justify-between">
      <h1 className="text-xl text-gray-600 font-semibold my-4 ">Users</h1>
      <Link href={`/admin/add-user/`}>
      <p className="bg-green-600 text-xl fond-bold text-white w-fit px-2 py-1 rounded"
      >+ Users</p>
      </Link>
    </div>
      { users.map((user)=>{
         return (
         <div >
       
         <UserCard 
         user = { user } 
         />
         </div>
         )
       })
         
       }
      
      
    </div>
    )
  
}

export default Users;