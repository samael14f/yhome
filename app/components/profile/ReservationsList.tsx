import apiService from '@/app/services/apiService'
import Reservation from './Reservation'
import {getUserId} from '@/app/lib/actions'

const ReservationsList = async () =>{
  let val = false
  
  const reservationList = await apiService.get(`/api/auth/get-reservations`)
  if (reservationList){
    val = true
  }
  return(
       <div className="p-4">
    <h1 className="text-xl text-gray-600 text-bold mb-3 ">Reservations</h1>
      {val?
      (
      <div>
              {
          reservationList.map((reservation)=>{
           return(
           <div className = "space-x-2">
            <Reservation 
              reservation = {reservation}
            />
            </div>
            )
          })
        }
      </div>
      ):(
      <div>
        
        No Reservations

        
      </div>
      )
      
    }
    </div>
    
    
    
    )
}

export default ReservationsList;