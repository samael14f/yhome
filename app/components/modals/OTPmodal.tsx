'use client';

import Modal from "./Modal";

import {useEffect, useRef, useState} from "react";

import { useRouter } from 'next/navigation';
import useOTPModal from "@/app/hooks/useOTP";
import CustomButton from "../forms/CustomButton";
import useResetPasswordModal from "@/app/hooks/useResetPassword";
import apiService from "@/app/services/apiService";
import { PasswordManager } from './PasswordManagerModal'
import {useContext } from 'react'

const OTPmodal = () =>{
  const resetPassword = useResetPasswordModal()
  const email = useContext(PasswordManager)
  
  const otpModal = useOTPModal()
  const length = 6
  const [errors, setErrors] = useState<string[]>([]);
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const onOtpSubmit = async(otp) =>{
    console.log(otp);
    
    const formData ={
      otp:otp,
      email: email,
    }
    const response = await apiService.postWithoutToken('/api/auth/check-otp/', JSON.stringify(formData))
    if (response.success){
      otpModal.close()
      resetPassword.open()
      
      setOtp(['','','','','','',])
      setErrors([])
    }
    else{
      setErrors(response.errors)
      inputRefs.current.map(e=>e.disabled =false)
      
      setOtp(['','','','','','',])
      inputRefs.current[0].focus();
    }
  }
  useEffect(() => {
    
    setOtp(['','','','','','',])
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length){ onOtpSubmit(combinedOtp);
      inputRefs.current.map(e=>e.disabled=true)
    }
    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

 
  
  const content =(
    <>
    <div className="flex flex-col space-y-2">
    <h1 className="text-center text-2xl font-bold text-gray-800 my-2"> Enter the OTP </h1>
    <div className="flex items-center justify-center  ">
        
      {otp.map((value, index) => {
        return (
          <input
            disabled = {false}
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-[40px] h-[40px] border border-gray-200 text-center text-xl font-bold mx-2 text-gray-600 focus:outline-none focus:border-airbnb focus:ring-1 focus:ring-airbnb disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
          />
        );
      })}
       
       
     
    </div>
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
      
    
    </div>
    
    </>
    
    )
  
  return (
    
      <Modal
            isOpen={otpModal.isOpen}
            close={otpModal.close}
            label="OTP"
            content={content}
        />
    
    
    )
  
  
}

export default OTPmodal;





