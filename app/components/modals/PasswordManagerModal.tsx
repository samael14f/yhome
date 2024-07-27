'use client'


import ForgotPassword from "@/app/components/modals/ForgotPasswordModal"
import OTPmodal from "@/app/components/modals/OTPmodal"
import ResetPasswordModal from '@/app/components/modals/ResetPasswordModal'
import {createContext ,useState} from 'react'

export const PasswordManager = createContext()

const PasswordManagerModal = () =>{
  const [id, setId] = useState('')
  return (
    
    <>
    <PasswordManager.Provider value={id} >
    <ForgotPassword setId = {setId} />
    <OTPmodal />
    <ResetPasswordModal setId={setId}/>
    </PasswordManager.Provider>
    </>
    
    )
}

export default PasswordManagerModal;