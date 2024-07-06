'use client'
import Image from "next/image";
import PropertyType  from "./Properties"
import { useRouter } from "next/navigation";


export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
   
}
const UserProperty:React.FC<PropertyType> = ({property}) =>{
  
    const router = useRouter();

    return (
        <div 
            className="cursor-pointer w-[300px]"
            onClick={() => router.push(`/admin/property/${property.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={property.image_url}
                    sizes="(max-width: 768px) 300px, (max-width: 1200px): 300px, 200px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                />


            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{property.title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>${property.price_per_night}</strong> per night</p>
            </div>
        </div>
    )
}

export default UserProperty;