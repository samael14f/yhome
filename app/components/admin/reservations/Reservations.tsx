'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'

import Reservation from './Reservation'


export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
   
}
const Reservations = () =>{
    
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
              <Reservation  reservation = { reservation } />
              </div>
              
              )
          })
          
        }
        
      
    </div>
    )
  
}

export default Reservations;