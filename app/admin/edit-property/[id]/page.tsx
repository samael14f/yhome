'use client'
import { useState } from 'react'
import apiService from '@/app/services/apiService'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Categories from '@/app/components/addproperty/Categories';
import SelectCountry, {SelectCountryValue} from '@/app/components/forms/SelectCountry';



const EditProperty = ({params}:{params:{id:string}}) =>{
  const [errors, setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);
    
    const setCategory = (category: string) => {
        setDataCategory(category)
    }
    
const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
    }

    //
    // SUbmit
    const router = useRouter();
    const submitForm = async () => {
        console.log('submitForm');

        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData();
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('bedrooms', dataBedrooms);
            formData.append('bathrooms', dataBathrooms);
            formData.append('guests', dataGuests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);

            const response = await apiService.post(`/api/admin/edit-property/${params.id}`, formData);

            if (response.success) {
                console.log('SUCCESS :-D');

                router.push('/?added=true');

                addPropertyModal.close();
            } else {
                console.log('Error');

                const tmpErrors: string[] = Object.values(response).map((error: any) => {
                    return error;
                })

                setErrors(tmpErrors)
            }
        }
    }

    //
    //
    
  return(
    
    <div>
        
        <div>
        
         <h2 className='mb-6 text-2xl'>Choose category</h2>

           <Categories
               dataCategory={dataCategory}
             setCategory={(category) => setCategory(category)}
                    />
          
            
        </div>
        <div>
            <h2 className='mb-6 text-2xl'>Describe your place</h2>

               <div className='pt-3 pb-6 space-y-4'>
                 <div className='flex flex-col space-y-2'>
                     <label>Title</label>
                     <input
                         type="text"
                         value={dataTitle}
                         onChange={(e) => setDataTitle(e.target.value)}
                      className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                  </div>
                        
                 <div className='flex flex-col space-y-2'>
                    <label>Description</label>
                 <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'
                            ></textarea>
                        </div>
                </div>
        
        </div>
        
        
        <div>
                                <h2 className='mb-6 text-2xl'>Details</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Price per night</label>
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>
                                                <div className='flex flex-col space-y-2'>
                            <label>Bedrooms</label>
                            <input
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label>Bathrooms</label>
                            <input
                                type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>
                                                <div className='flex flex-col space-y-2'>
                            <label>Maximum number of guests</label>
                            <input
                                type="number"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>
                    </div>
        </div>
        
      <div>
        
                            <h2 className='mb-6 text-2xl'>Location</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <SelectCountry 
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>
        
        </div>
   
        
        <div>
        
                            <h2 className='mb-6 text-2xl'>Image</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='py-4 px-6 bg-gray-600 text-white rounded-xl'>
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
                                        {errors.map((error, index) => {
                        return (
                            <div
                                key={index}
                                className='p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80'
                            >
                                {error}
                            </div>
                        )
                    })}
        
        
        </div>
        <div>
          <button onClick = {submitForm} className="bg-green-600 text-xl text-bold text-white px-4 py-2 rounded" >Save</button>
        </div>
        
        
    </div>
    
    )
}

export default EditProperty;


/*

         <Link href={`/admin/edit-user/${user.id}`}>
          <p className="bg-slate-700 text-gray-50 text-center w-fit px-4 py-2 rounded-md ">
            Edit User
          </p>
          </Link>
          
          
          */