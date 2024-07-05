'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'


export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
   
}
const Users = () =>{
    
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getData = async () =>{
    const properties1 = await apiService.get('/api/admin/all-properties/')
    
    setProperties(properties1)
     }
  
  useEffect(()=>{
    getData();
  },[]);
  
  return(
    
    <div>
       {
         properties.map((property)=>{
           return(
             <div>
              { property.title }
             </div>
             )
         })
       }
      
      
    </div>
    )
  
}

export default Users;