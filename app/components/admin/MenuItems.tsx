'use client'


import { usePathname,useRouter } from "next/navigation"
import Link from "next/link";
import { log } from "console";



const MenuItems = () =>{

    
    const pathname = usePathname();
    // console.log(pathname)
    
    const LinkItems = [
      
      {
        name : 'Users',
        link : '/admin/users',
      },

      {
        name: 'Properties',
        link: '/admin/properties',
      },
      {
        name: 'Requests',
        link: '/admin/requests',
      },
      {
        name: 'Reservations',
        link: '/admin/reservations',
      },
      ]
      
    
   
    return(
        <div className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
         { LinkItems.map((item)=>{
           
         return(
            <Link href={item.link} key={ item.name}>
               <div className = {`text-start text-lg  font-semibold px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full ${(pathname===item.link)?'text-airbnb font-bold text-xl transition':''} `}>{item.name}</div>
                            
              </Link>
            ) } )}


            
              
        </div>

    )
}

export default MenuItems;
