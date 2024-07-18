'use client'

import apiService from '@/app/services/apiService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'



const AcceptRequest= ({params}:{params:{id: string}}) =>{
  const router = useRouter()
  const acceptRequest = async() =>{
    const response = await apiService.post(`/api/admin/accept-request/${params.id}`)
    if (response.success){
       router.push(`/admin/requests`)
    }
  }
  
  return (
    
    <div>
    
      <div className="p-10 flex flex-col shadow border border-gray-300 items-center " >

        <div>
        
        <p className=" text-xl font-bold text-gray-950 "> Are you sure ,you want to approve this property ?
        </p>
        
        <div className="flex justify-end items-center space-x-8 me-4 my-4 rounded">
        
          <Link href={`/admin/requests/request-property/${params.id}`}>      <p className="px-4 py-2 bg-slate-700 text-gray-50 text-xl font-bold "> back </p>
            </Link>
            
            
            <button className="px-4 py-2 bg-green-600 text-gray-100 text-xl font-bold rounded "
            onClick={()=>acceptRequest()}>
                approve
            </button>
        </div>
         
        </div>
        
      </div>
    
    </div>
    
    
    )
}

export default AcceptRequest;