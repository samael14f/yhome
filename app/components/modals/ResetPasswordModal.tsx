'use client';

import Modal from "./Modal";

import { useState ,useEffect} from "react";
import { useRouter } from 'next/navigation';
import useForgotPasswordModal from "@/app/hooks/useForgotPassword";
import useResetPasswordModal from "@/app/hooks/useResetPassword";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import {PasswordManager} from './PasswordManagerModal'
import {useContext} from 'react'
const ResetPasswordModal = ({setId}) =>{
    
    const email = useContext(PasswordManager)
    const loginModal = useLoginModal()
    const resetPassword = useResetPasswordModal()
   
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    
    const submitSignup = async () => {
        
        
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        }
        if(email.length !== 0){
        
        if(password1 === password2){
          
        if(password1.length >= 8){
        
        
          
          const response = await apiService.postWithoutToken('/api/auth/reset-password/', JSON.stringify(formData));
        
       
        if (response.success) {
            
           
            resetPassword.close();
            
            loginModal.open();
            setId('')
        } else {
            
            setErrors(response.errors);
        }
        }else{
          setErrors(['Password Must contains atlest 8 characters'])
        }
        
        
        }
        else{
          setErrors([`Password field did'nt match`])
        }
    }
    }
    
    
    
    const content = (
        <>
            <form 
                action={submitSignup}
                className="space-y-4"
            >


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
               
                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    
    return (
        <Modal
            isOpen={resetPassword.isOpen}
            close={resetPassword.close}
            label="Reset Password"
            content={content}
        />
    )
    
}

export default ResetPasswordModal;