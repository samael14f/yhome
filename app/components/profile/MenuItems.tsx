'use client'


import { usePathname,useRouter } from "next/navigation"
import {useEffect,useState } from 'react'
import Link from "next/link";
//import { log } from "console";
import {getUserId} from '@/app/lib/actions'


const MenuItems = ({id}) =>{

    
   
    const pathname = usePathname();
    // console.log(pathname)
    const LinkItems = [
      
      {
        name : 'Properties',
        link : '/myprofile/properties',
      },
      {
        name : 'Edit Profile',
        link : `/myprofile/edit-profile/${id}`,
      },
      ]
    
    
   
    return(
        <div className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
         { LinkItems.map((item)=>{
           
         return(
            <Link href={item?.link} key={ item.name}>
               <div className = {`text-start text-lg  font-semibold px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full ${(pathname===item.link)?'text-airbnb font-bold text-xl transition':''} `}>{item.name}</div>
                            
              </Link>
            ) } )}


            
              
        </div>

    )
}

export default MenuItems;