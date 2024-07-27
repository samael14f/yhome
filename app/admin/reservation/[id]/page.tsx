import apiService from '@/app/services/apiService'
import Image from 'next/image'
import Link from 'next/link'

const Reservation = async ({params}:{params:{id:string}}) =>{
  
  const reservation = await apiService.get(`/api/admin/get-reservation/${params.id}`)
  
  
  return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[400px] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={reservation.property.image_url}
                    className="object-cover w-full"
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
                        href={`/admin/user/${reservation.property.landlord.id}`}
                        className="py-6 flex items-center space-x-4"
                    >


                        <p><strong>{reservation.property.landlord.name}</strong> is the host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                        {reservation.property.description}
                    </p>
                </div>

       
             
            </div>
            
            
          <div className="space-y-4">
            <p className="text-base text-gray-600 font-semibold ">from {reservation.start_date} to   {reservation.end_date}</p>
            <p className="text-base text-gray-600 font-semibold ">Nights {reservation.number_of_nights}</p>
            <p className="text-base text-gray-600 font-semibold ">Guests {reservation.guests}</p>
            <p className="text-lg text-gray-800 font-bold ">Total {reservation.total_price}$</p>
            {
              reservation.paid_status?
              (
              <div className="text-2xl font-bold text-green-500 border border-2 border-green-400 text-center p-4 rounded-full my-4 w-[50%] aspect-1">
                Paid
              </div>
              
              ):
              (
              <div className="text-2xl font-bold text-gray-500 border border-2 border-gray-400 text-center p-4 rounded-full my-4 w-[50%] aspect-1">
                Not yet paid
              </div>
              
              )
            }
          </div>
            
            
         <div className="flex items-center p-2 mt-8 ">
         <Link href={`/admin/delete-reservation/${reservation.id}`}>
          <p className="bg-red-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Delete Reservation
          </p>
          </Link>
         
          </div>
        </main>
    )
}

export default Reservation;