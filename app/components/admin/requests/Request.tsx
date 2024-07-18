
import Image from 'next/image'
import Link from 'next/link'


const Request = ({request}) =>{
  return (
    <>
    <Link href={`/admin/requests/request-property/${request.id}`} className="w-full">
      <div className='flex justify-between p-2  shadow w-full items-center '>
            <div className="flex space-x-2 items-center">
               <Image 
                width={ 200 }
                height={ 200 }
                src={request.property.image_url}
                className="rounded "
                alt="property"
                />
                
                <div className="flex flex-col space-y-2 ">
                  <p className="text-xl text-gray-800 font-bold ">
                    { request.property.title }
                  </p>
                  <p className="text-base text-gray-600 font-semibold">
                    {
                      request.owner.email
                    }
                  </p>
                </div>
             </div>   
                <div>
                  {request.is_canceled?
                  (
                    
                    <div className=" p-1 rounded text-base border border-red-500 text-red-600 bg-red-200">
                      cancelled 
                    </div>
                  
                  ):
                  (
                  <div>
                   {
                    request.is_verified_by_staff?
                    (
                    <div className="p-1 flex flex-col space-y-2 items-end">
                    
                    <p className="p-1 rounded text-base text-green-600 border border-green-500 bg-green-200 w-fit">Approved</p>
                    <p className="text-base font-semibold text-end">by {request.verified_staff}</p>
                    </div>
                    ):
                    (
                    <div className="p-1 rounded text-base text-slate-600 bg-slate-200 border border-slate-500">
                    not approved 
                    </div>
                    )
                  }
                  </div>
                
                 )
                
                  
                 }
                
                </div>
           </div>
      </Link>
    </>
    )
}

export default Request;