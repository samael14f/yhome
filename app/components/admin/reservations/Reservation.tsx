import Link from 'next/link'



const Reservation = ({reservation}) =>{
  
  return (
    <>
    <Link href={`/admin/reservation/${reservation.id}`}>
    <div className="p-3 mx-2 my-2  rounded border border-gray-300 flex items-center justify-between ">
      
      <div className="space-y-2 p-1 ">
      
        <p className="text-xl text-gray-800 font-bold ">from { reservation.start_date }  to 
        {reservation.end_date}</p>
        <p className="text-base text-gray-500 font-semibold">Guests { reservation.guests }</p>
      </div>
      <div className="space-y-3 p-1">
        <p className="text-xl text-gray-600 text-normal  ">No of Nigths {reservation.no_of_nights}</p>
        <p className="text-2xl text-gray-900 text-bold "> {reservation.total_price} $</p>
      </div>
    
    </div>
    </Link>
    
    </>
    )
}

export default Reservation;