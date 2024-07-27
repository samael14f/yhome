'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import useForgotPasswordModal from "@/app/hooks/useForgotPassword";
import useOTPModal from "@/app/hooks/useOTP";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";


const ForgotPassword = ({setId}) =>{
  
  const otpModal = useOTPModal()
  
  const [email,setEmail] = useState('')
  const [errors, setErrors] = useState<string[]>([]);
  const forgotPassword = useForgotPasswordModal()
  const submitForgot = async () => {const              formData = {
            email: email,
         
          }
        
        const response = await apiService.postWithoutToken('/api/auth/forgot-password/', JSON.stringify(formData) )
        setEmail('')
        if (response.success) {
            
            
            setId(email);
            forgotPassword.close();
            otpModal.open();
           
            
            
        } else {
            setErrors(response.errors);
        }
    }
  const content = (
    <>
     <form 
      action={submitForgot}
       className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                  
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

                <CustomButton
                    label="Submit"
                    onClick={submitForgot}
                />
            </form>
    </>
    )
 
 
  return (
        <Modal
            isOpen={forgotPassword.isOpen}
            close={forgotPassword.close}
            label="Forgot Password"
            content={content}
        />
    
    
    )
}

export default ForgotPassword;