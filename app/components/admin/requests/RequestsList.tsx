

import apiService from '@/app/services/apiService'
import Request from './Request'
//import { useState ,useEffect } from 'react'
import Image from 'next/image'



const RequestsList = async ({url}) =>{
  
  
  const requestsList = await apiService.get(url);

  return (
    
    <div>
    
       {  requestsList.length !== 0 ? (
          requestsList.map((request)=>{
          
            return(
            <div className="px-1 py-2 flex w-full">
            
            <Request request = {request} />

            </div>
            )
            
          })
          ):
          (
            <div>
              no new request
            </div>
          )
        }
    
    </div>
    
    )
  
  
}

export default RequestsList;