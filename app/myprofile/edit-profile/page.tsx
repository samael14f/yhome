'use client'

import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import { useState,ChangeEvent } from "react";

const EditProfile = async() =>{
    const [dataName,setDataName] = useState('');
    const [dataImage,setDataImage] = useState<File | null>(null);
    const userId = getUserId(); 
    


    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
    }

    const submitForm = async() =>{
        if (dataName && dataImage){
            const form = new FormData()
            form.append('name',dataName);
            form.append('avatar_url',dataImage);

            // const response = await apiService.patch()

        }
    }

    return (
        <div>
            
        </div>
    )
};

export default EditProfile;