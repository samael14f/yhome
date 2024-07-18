import Users from '@/app/components/admin/users/Users'


const UsersAdmin = () =>{
  
  return (
      <div>
      
        <Users url='/api/admin' name='Users' addLink = '/admin/add-user/' />
      
      </div>
    )
  
}

export default UsersAdmin;