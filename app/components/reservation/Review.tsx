import Image from "next/image"



const Review = ({review}) =>{
  
  const date  = new Date(review.created_at)
  
return (
  
  <div className="p-2 my-2 border-2 border-gray-300 flex flex-col bg-white rounded shadow " key={review.id}>
    <div className="flex items-center px-2 justify-between py-2">
      <div className="flex items-center space-x-2">
      {(review.review_by.avatar_url.length !== 0)? (
        <Image
          width={30}
          height={30}
          className="rounded-full border border-white"
          alt={`${review.review_by.name}'s image`}
        src={review.review_by.avatar_url} />)
        :(
          <div className="w-10 h-10 rounded-full  text-center text-airbnb font-bold bg-gray-50">
          Yh
          </div>
        )}
        <p className="text-gray-800 font-semibold text-base">
        
          {
          (review.review_by.name)?
          review.review_by.name:
          review.review_by.email
          }
        </p>
        
      </div>
      <p className="text-sm text-gray-500">
     {date.toDateString()}
      </p>
    </div>
    <hr/>
    <div className="text-gray-700 text-md font-normal leading-2 py-4 px-2 ">
      {review.body}
    </div>
  </div>
  
  )
  
  
}

export default Review;