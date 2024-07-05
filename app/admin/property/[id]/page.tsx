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

             
            </div>
        </main>
    )
}

export default Property;