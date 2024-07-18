
import apiService from "@/app/services/apiService"
import Review from "@/app/components/reservation/Review"


const Reviews = async ({id}) =>{
  
  const reviews = await apiService.get(`/api/properties/get-reviews/${id}`)
  
  return (
    
    <div className="mt-3 pt-2 ">
      <h1 className="text-base font-bold text-slate-600 my-3 ">Reviews</h1>
      <div className="overflow-y-scroll py-3 h-32 md:h-[350px] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6)]">
        { reviews.length !== 0?(
          
          reviews.map(review => {
            return(
            <Review review = {review}  />
            
            )
          })
        
        ):
        (
        
        <div>
        no Reviews posted
        
        </div>
        
        
        )
        }
      </div>
    </div>
    
    )
}

export default Reviews;