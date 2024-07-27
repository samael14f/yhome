import RequestsList from '@/app/components/admin/requests/RequestsList'


const Requests = () =>{
  
  
  return (
    
    <div>
    
        <RequestsList url = {`/api/admin/get-requests-list`}/>
    
    </div>
    
    )
  
}

export default Requests;