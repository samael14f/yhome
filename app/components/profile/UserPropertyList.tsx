
import apiService from '@/app/services/apiService'
import PropertyItem from './PropertyItem'
const UserPropertyList = async({id}) =>{
  let val = false
  const propertyList = await apiService.get(`/api/admin/get-property-list/${id}`)
  if (propertyList){
    val = true
  }
  return (
    
    <div className="p-4">
    <h1 className="text-xl text-gray-600 text-bold mb-3 ">Properties</h1>
      {val?
      (
      <div>
              {
          propertyList.map((property)=>{
           return(
           <div className = "grid grid-cols-2 md:grid-cols-4">
              <PropertyItem 
              property = { property }
              />
              
            </div>
            )
          })
        }
      </div>
      ):(
      <div>
        
        ghello 

        
      </div>
      )
      
    }
    </div>
    
  )
}


export default UserPropertyList;
