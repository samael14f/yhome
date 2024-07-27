
import apiService from '@/app/services/apiService'
import Image from 'next/image'
import Link from 'next/link'
import PostReview from '@/app/components/reservation/PostReview'
import Reviews from '@/app/components/reservation/Reviews'
import Payment from '@/app/components/reservation/Payment'


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

                  <div className="flex flex-col space-y-6 my-auto shadow-lg p-6 py-8 col-span-2 w-full">
                  <h1 className="text-3xl font-bold text-gray-800 ">Payment Status</h1>
                    <p className="text-xl text-gray-600 font-semibold">from : {reservation.start_date}</p>
                    <p className="text-xl text-gray-600 font-semibold">to : {reservation.end_date}</p>
                    <p className="text-xl text-gray-600 font-semibold">Nights : {reservation.number_of_nights}</p>
                    <p className="text-2xl text-gray-800 font-semibold">Total : ${reservation.total_price} </p>
                    {
                      reservation.paid_status ? (
                      <div className="text-2xl font-bold text-green-500 border border-2 border-green-400 text-center p-4 rounded-full my-4 w-full aspect-1">
                        Paid
                      </div>
                      ):
                      (
                      <Payment 
                      id = {reservation.id}
                      amount = {reservation.total_price} />
                      )
                    }
                  </div>
            </div>
        </main>
    ) 
}

export default Reservation;

