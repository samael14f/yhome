'use client'

import { useState } from "react"

import { usePathname,useRouter } from "next/navigation"
import Link from "next/link";



const MenuItems = () =>{

    
    const pathname = usePathname();
    console.log(pathname)
    const menuItems = [
    {
        name : 'my Details',
        link : 'myprofile/details'
        
    },
    {
        name : 'my Properties',
        link : 'myprofile/properties',
        
    },
    {
        name : 'my Guests',
        link : 'myprofile/guests',
        
    },
    {
        name : 'edit Profile',
        link : 'myprofile/edit-profile',
        
    },

    ]
    const router = useRouter();
    
    const handleClick = (link:string) =>{
        
        router.push(`${link}`);
        
    }
   
    return(
        <ul className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
                        {menuItems.map( item =>{
                                const link = item.link;
                                return (
                                
                                    <Link href={item.link}>
                                        <li key={item.name} className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full ${pathname === item.link ? 'text-airbnb' : '' } ` }
                                    >{item.name}</li>
                                    
                                    </Link>
                                
                            )}
                        )}
        </ul>

    )
}

export default MenuItems