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
    
  const [reservations, setReservations] = useState([])
  const getData = async () =>{
    
    
    const reservations1 = await apiService.get(`/api/admin/all-reservations/`)
   
    
    setReservations(reservations1)
  }
  
  useEffect(()=>{
    getData();
  },[]);
  
  return(
    
    <div>
        {
          reservations.map((reservation)=>{
            return(
              <div>
                { reservation.id }
              </div>
              
              )
          })
          
        }
        
      
    </div>
    )
  
}

export default Users;