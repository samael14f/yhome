import apiService from '@/app/services/apiService'
import Reservation from './Reservation'

const UserReservationList = async ({id}) =>{
  let val = false
  const reservationList = await apiService.get(`/api/admin/get-reservation-list/${id}`)
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
        
        

        
      </div>
      )
      
    }
    </div>
    
    
    
    )
  
  
}

export default UserReservationList;