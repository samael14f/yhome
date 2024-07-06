


// import { usePathname,useRouter } from "next/navigation"
import Link from "next/link";
//import { log } from "console";
import {getUserId} from '@/app/lib/actions'


const MenuItems = async () =>{

    
    // const pathname = usePathname();
    // console.log(pathname)
    
    const userId = await getUserId()
   
    return(
        <div className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
           <Link href={`/myprofile/properties/`}>
               <div className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  `}>
               Properties</div>
                            
            </Link>
            
              
            <Link href={`/myprofile/edit-profile/${userId}`}>
               <div className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  `}>
               Edit Profile</div>
                            
              </Link>
              
              
        </div>

    )
}

export default MenuItems;