
import apiService from '@/app/services/apiService'
import Image from 'next/image'
import Link from 'next/link'

const RequestProperty = async ({params}: { params: {id: string }}) =>{
  
  const requestProperty = await apiService.get(`/api/admin/get-property-request/${params.id}`)
  
return (
  
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[400px] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={requestProperty.property.image_url}
                    className="object-cover w-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{requestProperty.property.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {requestProperty.property.guests} guests - {requestProperty.property.bedrooms} bedrooms - {requestProperty.property.bathrooms} bathrooms
                    </span>

                    <hr />

                    <Link 
                        href={`/admin/user/${requestProperty.owner.id}`}
                        className="py-6 flex items-center space-x-4"
                    >


                        <p><strong>{requestProperty.owner.name}</strong> is the host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                        {requestProperty.property.description}
                    </p>
                    <p className="mt-3 text-lg font-bold">
                    ${
                      requestProperty.property.price_per_night
                    } per night 
                    </p>
                </div>
            <div className="py-6 ">
                <h1 className="text-xl text-gray-800 font-bold">Location </h1>
                <p className="text-lg text-gray-600">{requestProperty.property?.country}</p>
                <p className="text-lg text-gray-600">{requestProperty.property?.address}</p>
                
                
            </div>
       
             
            </div>
            <hr />
            <div className="p-2 space-y-4 flex flex-col ">
            <h1 className="text-xl text-gray-800 font-bold">Status</h1>
            {
              !requestProperty.is_verified_by_staff?
              (
              <div className="text-lg ">
              not approved by staff
              </div>
              ):
              (
              <div className="text-lg">
                approved by staff
              </div>
              )
              
            }
            
            <div className="text-lg">
              Verification staff : {
                requestProperty.verified_staff.email
             }
            </div>
            
            </div>
            <hr />
            <div className="mt-3 text-xl font-bold p-2 my-4 ">
            licence  : <a href={requestProperty.property.license_url} download className="text-white p-1 ms-2 rounded bg-blue-400 text-lg font-semibold">
            
            download</a>
            </div>
            
          {
            (!requestProperty.is_canceled && !requestProperty.is_verified_by_admin)?(
          
         <div className="flex items-center p-2 space-x-8 ">
         <Link href={`/admin/requests/cancel-request/${requestProperty.id}`}>
          <p className="bg-red-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md font-semibold ">
            Cancel Request
          </p>
          </Link>
          
         <Link href={`/admin/requests/accept-request/${requestProperty.id}`}>
          <p className="bg-green-500 text-gray-50 text-center w-fit px-4 py-2 rounded-md font-semibold ">
            Approve Request
          </p>
          </Link>
          
          
          </div>
          )
          :(
          <div>
          
          nope
          </div>
          
          )
          }
        </main>
    )
  
}

export default RequestProperty;
 
