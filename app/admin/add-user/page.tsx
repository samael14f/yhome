"use client"

import { useState } from 'react'
import {useRouter} from 'next/navigation'
import apiService from '@/app/services/apiService'



const AddUser = () =>{const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    var validRegex =/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const submitForm = async () =>{
      if(email&&password1&&password2){
        if(password2===password1){
          const formData = new FormData();
          formData.append('email',email);
          formData.append('password',password1)
          
          const response = await apiService.post(`/api/admin/create-user/`,formData)
          
          if (response.success){
            router.push(`/admin/users/`)
          }else{
            setErrors([response.errors])
          }
          
        }else{
          setErrors(['passwords did not match'])
        }
          
      }else{
        setErrors(['enter all fields'])
      }

      
    }
  
  
  
  return (
    
    <div>
      
      
      <div className="flex flex-col items-center
      px-8 py-4 space-y-6 ">
      
       <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            
                {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}
                
            <button className="bg-airbnb text-white py-2 w-full rounded-xl" onClick={()=>submitForm()}>AddUser</button>
      
      </div>
      
      
      
    </div>
    
    )
};

export default AddUser;