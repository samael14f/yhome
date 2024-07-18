
import apiService from '@/app/services/apiService'
import Image from 'next/image'
import Link from 'next/link'
import PostReview from '@/app/components/reservation/PostReview'
import Reviews from '@/app/components/reservation/Reviews'
const Reservation = async ({params}:{params:{id: string}}) =>{
  
  const reservation = await apiService.get(`/api/properties/reservation/${params.id}`)
  
  
return (
        <main className="max-w-[1500px] mx-auto px-6 pb-">
            <div className="w-full h-[40vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={reservation.property.image_url}
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{reservation.property.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {reservation.property.guests} guests - {reservation.property.bedrooms} bedrooms - {reservation.property.bathrooms} bathrooms
                    </span>

                    <hr />

                    <Link 
                        href={`/landlords/${reservation.property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                        {reservation.property.landlord.avatar_url && (
                            <Image
                                src={reservation.property.landlord.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        )}

                        <p><strong>{reservation.property.landlord.name}</strong> is your host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                        {reservation.property.description}
                    </p>
                    <hr />
                    <div className="flex flex-col space-y-4 px-4  justify-between">
                    <div className=" p-1 ">
                    <Reviews id={reservation.property.id} />
                    </div>
                   <PostReview 
                      propertyId={reservation.property.id}
                      id={reservation.id}/>
                   </div>
                </div>

                  <div>
                    payment
                  </div>
            </div>
        </main>
    ) 
}

export default Reservation;

