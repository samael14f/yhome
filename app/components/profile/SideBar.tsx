import Image from "next/image";
import MenuItems from "./MenuItems";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

const SideBar = async() =>{
    const userId = await getUserId();
    const landlord = await apiService.get(`/api/auth/${userId}/`)

    return(
        <aside className="col-span-1 mb-4 border border-gray-300  rounded-lg ">
           <div className="flex flex-col items-center p-6 rounded-xl  ">
                <Image
                     src={landlord.avatar_url}
                    width={80}
                    height={80}
                   alt="Landlord name"
                  className="rounded-full"
                        />

               <h1 className="mt-6 text-2xl">{landlord.name}</h1>

                        
           </div>
           <hr />
                    
          <MenuItems />
                    
        </aside>
    )
}

export default SideBar;