'use client'

import { useState,useEffect} from 'react'
import { getUserId } from '@/app/lib/actions'
import apiService from '@/app/services/apiService'

import Users from '@/app/components/admin/users/Users'
import Reservations from '@/app/components/admin/reservations/Reservations'
import Properties from '@/app/components/admin/properties/Properties'

const AdminDasboard =  () =>{
  
  //
  
  return (
      <>
     
      <div className = "flex flex-col space-y-10 divide-y divide-gray-300 " >
      
      
       <Users url='/api/admin' name='Users' addLink = '/admin/add-user/' />
      
      <Properties />
      
      <Reservations />
      

      </div>

        
 
        
      </>
    )
}

export default AdminDasboard;