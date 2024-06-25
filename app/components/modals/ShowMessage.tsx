import { useRouter } from "next/navigation"
import CustomButton from "../forms/CustomButton"
import Modal from "./Modal";
import useShowMessage from "@/app/hooks/useShowMessage";



interface ShowMessageProps{
    message:string;
    label:string;
    link:string;
}


const ShowMessageModal : React.FC<ShowMessageProps>  = ({message,label,link}) => {

    const router = useRouter();
    const showMessage = useShowMessage();
    const content = (
        <>
        <div className="space-y-4">
            {message}
            <CustomButton label="Go to" onClick={()=>router.push(link)} />
        </div>
        </>
    )
    return (
        <Modal
            
            isOpen = {showMessage.isOpen}
            close={showMessage.close}
            label = {label}
            content={content} 
         />   
    )
};


export default ShowMessageModal;

