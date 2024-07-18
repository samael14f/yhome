import apiService from '@/app/services/apiService'
import Image from 'next/image'
import Link from 'next/link'
const Property = async ({params}: { params: {id: string }}) =>{
  
  const property = await apiService.get(`/api/admin/get-property/${params.id}`)
  return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[400px] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={property.image_url}
                    className="object-cover w-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathrooms
                    </span>

                    <hr />

                    <Link 
                        href={`/admin/user/${property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >


                        <p><strong>{property.landlord.name}</strong> is the host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                        {property.description}
                    </p>
                    
                </div>
          
            <div className="py-6">
                <h1 className="text-xl text-gray-800 font-bold">Location </h1>
                <p className="text-lg text-gray-600">{property?.country}</p>
                <p className="text-lg text-gray-600">{property?.address}</p>
                
                
            </div>
             
            </div>
         <div className="flex items-center p-2 space-x-8 ">
         <Link href={`/admin/edit-property/${property.id}`}>
          <p className="bg-slate-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Edit Property
          </p>
          </Link>
          
         <Link href={`/admin/delete-property/${property.id}`}>
          <p className="bg-red-500 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Delete Property
          </p>
          </Link>
          
          
          </div>
        </main>
    )
}

export default Property;