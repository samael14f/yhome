


// import { usePathname,useRouter } from "next/navigation"
import Link from "next/link";
import { log } from "console";



const MenuItems = () =>{

    
    // const pathname = usePathname();
    // console.log(pathname)
    
    
   
    return(
        <div className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
         
            <Link href='/admin/users'>
               <div className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  `}>Users</div>
                            
              </Link>
              
            <Link href='/admin/properties'>
               <div className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  `}>
              Properties</div>
                            
              </Link>
                            
            <Link href='/admin/reservations'>
               <div className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  `}>
               Reservations</div>
                            
              </Link>
              
        </div>

    )
}

export default MenuItems;