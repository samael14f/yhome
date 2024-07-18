'use client'
import Select from 'react-select';
import apiService from '@/app/services/apiService'
import { useState, useEffect } from 'react'

export type SelectUserValue = {
    label: string;
    value: string;
}
interface SelectUserProps {
    value?: SelectUserValue;
    onChange: (value: SelectUserValue) => void;
}
const SelectUser: React.FC<SelectUserProps> = ({
    value,
    onChange
}) => {
  const [options,setOptions] = useState<SelectUserValue[]>([])
  const getUserData = async () =>{
    const data = await apiService.get(`/api/admin/get-non-staffs`)
    setOptions(data)
  }
  
  useEffect(getUserData,[])
  
  
  return (
        <>
        { options &&
            <Select
                isClearable
                placeholder="Select user ..."
                options={options}
                value={value}
                onChange={(value) => onChange(value as SelectUserValue)}
            />
        }
        </>
    )
  
}
export default SelectUser;