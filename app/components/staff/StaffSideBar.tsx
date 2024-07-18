import { getUserId } from "@/app/lib/actions"
import apiService from '@/app/services/apiService'
import MenuItems from './MenuItems'
import Link from 'next/link'

const StaffSideBar = async() =>{
  const userId = await getUserId();
  const user = await apiService.get(`/api/auth/${userId}`);
  
  return (
    <>
      <aside className="md:sticky md:top-32  col-span-1 mb-4 border border-gray-300  rounded-lg h-fit pb-10">
           <div className="flex flex-col items-center p-6 rounded-xl  ">


              <Link href="/admin"><h1 className="mt-6 text-s">
              {user.name?(user.name):(user.email)}</h1>
               </Link>
               <p className="text-base text-gray-600 font-semibold text-center">
               (Staff)</p>
                        
           </div>
           <hr />
                    
          <MenuItems /> 
                    
        </aside>
    </>
    )
};

export default StaffSideBar;