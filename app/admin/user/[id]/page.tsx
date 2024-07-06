import apiService from "@/app/services/apiService";

import UserPropertyList from '@/app/components/admin/properties/UserPropertyList'
import UserReservationList from '@/app/components/admin/reservations/UserReservationList'
import Link from 'next/link'
import Image from 'next/image'

const UserDetails = async({params}: { params: {id: string }}) =>{
  
  const user = await apiService.get(`/api/admin/get-user/${params.id}`);
  
  return (
    
    <div className='p-3  md:p-4 flex flex-col shadow border border-gray-300 rounded-lg '>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-400 p-3'>
              <Image src={user.avatar_url} width={60} height={60} className='p-1 w-20 h-20 rounded-full text-center' />
          <p className="text-xl text-gray-800 font-bold capitalize ">{ user.name }</p>
          <p className="text-md text-gray-600 font-semibold ">{ user.email }</p>
         
         
         <div className="flex space-x-4 mx-4">
         <Link href={`/admin/delete-user/${user.id}`}>
          <p className="bg-red-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Delete User
          </p>
          </Link>
          
         <Link href={`/admin/edit-user/${user.id}`}>
          <p className="bg-slate-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Edit User
          </p>
          </Link>
          </div>
        </div>
        
        
        <div className='border-b border-gray-400 p-3'>
          <UserPropertyList id={ user.id } />
        </div>
        
        
        <div className="p-3">
          <UserReservationList id={ user.id } />
        </div>
    
    </div>
    )
}

export default UserDetails;