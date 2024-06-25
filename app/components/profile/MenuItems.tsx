


// import { usePathname,useRouter } from "next/navigation"
import Link from "next/link";
import { log } from "console";



const MenuItems = () =>{

    
    // const pathname = usePathname();
    // console.log(pathname)
    const menuItems = [
   
    {
        name : 'my Properties',
        link : 'myprofile/properties',
        
    },
   
    {
        name : 'edit Profile',
        link : 'myprofile/edit-profile',
        
    },

    ]
    
   
    return(
        <ul className=" flex flex-col gap-2 w-full items-center mt-1 justify-center ">
                        {menuItems.map( item =>{
                                const link = item.link;
                                return (
                                <li key={item.name} className = {`px-5 py-4 cursor-pointer hover:bg-gray-100 transition w-full  ` }
                                 >
                                    <Link href={item.link}>{item.name}
                                    
                                    </Link>
                                </li>
                            )}
                        )}
        </ul>

    )
}

export default MenuItems