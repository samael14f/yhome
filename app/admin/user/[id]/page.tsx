import apiService from "@/app/services/apiService";


const User = async({params}: { params: {id: string }}) =>{
  
  const user = await apiService.get(`/api/admin/get-user/${params.id}`);
  return (
    
    <div>
        
        {user.name}
    
    </div>
    )
}

export default User;