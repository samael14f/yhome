'use client'


import {useState ,useEffect} from 'react'
import apiService from '@/app/services/apiService'
import {useRouter} from 'next/navigation'



const PostReview = ({propertyId,id}) =>{
  const [post,setPost] = useState('');
  const router = useRouter()
  const submitForm = async (propertyId) =>{
    const formData = new FormData();
    formData.append('body',post)
    formData.append('propertyId',propertyId)
    const response = await apiService.post(`/api/properties/post-review/`,formData)
    if (response.success === true){
      router.push(`/myreservations/reservation/${id}`)
      setPost('')
    }
  }
  
  
  return (
    
    <div>
    
      <div className="flex p-2 space-x-2 ">
        <textarea id="body" onChange={
          (e)=>{
            setPost(e.target.value)
          }
        } placeholder="enter the review"
        className="w-full h-[54px] text-xl px-4 border text-gray-700 border-gray-300 rounded-xl py-2" cols={8} rows={2} value={post} >
        </textarea>
        
        <button className=" bg-airbnb text-white p-2 w-fit text-center  rounded-xl" onClick={()=>submitForm(propertyId)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#ffffff" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8"/></svg>
        </button>
        

      </div>
    
    </div>
    
    )
}

export default PostReview;