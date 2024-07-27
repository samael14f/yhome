'use client'

import apiService from '@/app/services/apiService'
import useRazorpay, { RazorpayOptions } from "react-razorpay"
import { useRouter } from 'next/navigation';

const Payment = (id:string, amount:string)=>{
  const data = {
    id :id,
    amount:amount
    
  }
  
  const router = useRouter()
  
  const Razorpay = useRazorpay()
  
  const createCheckoutSession = async () =>{
    const res = await apiService.post(`/api/properties/create-checkout/`,JSON.stringify(data))
    
    if (res.success){
      alert(res.data.id)
      const order_id = res.data.id
      var options = {
    "key": process.env.RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
    "order_id":order_id,
    
   
    "name": "Yhome",
    "description": "Yhome Transaction",
    "image": "/logo.jpg",
    //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": async function (response){
        
        const payment_data={
          razorpay_payment_id:response.razorpay_payment_id,
          razorpay_order_id:response.razorpay_order_id,
          razorpay_signature:response.razorpay_signature,
          reservation_id:id
        }
        const res_pay = await apiService.post(`/api/properties/complete-payment/`,JSON.stringify(payment_data))
        if(res_pay.success){
          router.push(`/myreservations/reservation/${id.id}`)
        }
        
    },
    "prefill": {
        "name": "yhome user",
        "email": "yhome@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
    
    rzp1.open()
    
    }
  }
  
  return (
    
    <div>
      <button className='py-2 text-xl font-bold text-white bg-green-400 rounded-lg w-full' onClick={createCheckoutSession}>Pay </button>
    </div>
    
    )
}

export default Payment;