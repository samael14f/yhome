import Users from '@/app/components/admin/users/Users'




const Staffs = () =>{
 
  
  return(
    
    <div>
      
      <Users url = {`/api/admin?is_staff=true`}  name='Staffs' addLink = '/admin/staffs/add-staffs'/>
    </div>
    
    )
  
  
};

export default Staffs;