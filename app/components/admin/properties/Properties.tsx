'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'
import PropertyItem from './PropertyItem'

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
   
}
const Properties = () =>{
    
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
              <PropertyItem  
              property = {  property }
              />
             </div>
             )
         })
       }
      
      
    </div>
    )
  
}

export default Properties;