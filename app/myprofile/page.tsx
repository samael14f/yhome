import { getUserId } from "../lib/actions";
import apiService from "../services/apiService";
import Image from "next/image";
import PropertyList from "../components/properties/PropertyList";
import SideBar from '../components/profile/SideBar'



const MyProfile =  async () =>{
  const userId = await getUserId();
  const user = await apiService.get(`/api/admin/get-user/${userId}`);
    
    return (
     <div className='p-3  md:p-4 flex flex-col shadow border border-gray-300 rounded-lg '>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-400 p-3'>
              <Image src={user.avatar_url} width={60} height={60} className='p-1 w-20 h-20 rounded-full text-center' />
          <p className="text-xl text-gray-800 font-bold capitalize ">{ user.name }</p>
          <p className="text-md text-gray-600 font-semibold ">{ user.email }</p>
         </div>
            
        </div>
    )
}


export default MyProfile;