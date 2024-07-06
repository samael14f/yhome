'use client'
import { useState } from 'react'
import apiService from '@/app/services/apiService'

import Image from 'next/image'
import { useRouter } from 'next/navigation';


const EditProfile = ({params}:{params:{id:string}}) =>{
  const [dataName,setDataName] = useState('');
  const [dataImage, setDataImage] = useState<File | null>(null);
  
  
  
  
  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
  }
  
  const router = useRouter();
  
  const submitForm = async () =>{
    if(dataImage&&dataName){
      const formData = new FormData();
      formData.append('name',dataName);
      formData.append('avatar',dataImage);
      const response = await apiService.post(`/api/auth/edit-user/${params.id}`,formData)
      
      
      if (response.success) {
                console.log('SUCCESS :-D');

                router.push(`/myprofile`);

               
            } else {
                console.log('Error');

                
            }
    }
  }
  
  
  
        
  return (
    
      <div className="flex flex-col items-center space-y-8 justify-center">
       <h1 className="mb-6 text-2xl ">Edit Profile </h1>
        <div className=" w-full flex flex-col space-y-4 ">
        
            <label htmlFor='name' className="text-xl">Name</label>
        
             <input src='text' value={dataName} id='name' onChange={(e)=>{setDataName(e.target.value)}}
             className='w-[50%] p-4 border border-gray-600 rounded-xl'
             
             />
        </div>
        <p>{dataName}</p>
        <div className=" w-full flex flex-col space-y-4">
        <label className="text-xl">Image </label>
             <div className='py-4 px-4 bg-gray-600 text-white rounded-xl w-[50%]'>
                            <input
                                type="file"
                                accept='image/*'
                                onChange={setImage}
                            />
                </div>

                        {dataImage && (
                            <div className='w-[200px] h-[150px] relative'>
                                <Image
                                    fill
                                    alt="Uploaded image"
                                    src={URL.createObjectURL(dataImage)}
                                    className='w-full h-full object-cover rounded-xl'
                                />
                            </div>
                        )}
        </div>
        <div>
          <button onClick = {submitForm} className="bg-green-600 text-xl text-bold text-white px-4 py-2 rounded" >Save</button>
        </div>
      </div>
    )
}

export default EditProfile;