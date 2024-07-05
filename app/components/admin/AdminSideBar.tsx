import { getUserId } from "@/app/lib/actions"
import apiService from '@/app/services/apiService'
import MenuItems from './MenuItems'


const AdminSideBar = async() =>{
  const userId = await getUserId();
  const user = await apiService.get(`/api/auth/${userId}`);
  
  return (
    <>
            <aside className="col-span-1 mb-4 border border-gray-300  rounded-lg ">
           <div className="flex flex-col items-center p-6 rounded-xl  ">


               <h1 className="mt-6 text-2xl">{user.name}</h1>

                        
           </div>
           <hr />
                    
          <MenuItems />
                    
        </aside>
    </>
    )
};

export default AdminSideBar;