'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'
import UserCard from './UserCard'

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
    
    <div>
      { users.map((user)=>{
         return (
         <div>
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