import PropertyList from "@/app/components/properties/PropertyList";

import { getUserId } from "@/app/lib/actions";

const Properties = async() =>{
    const userId = await getUserId()
    return (
        <div>
            <PropertyList 
                landlord_id={userId}
            />
        </div>
    )
};

export default Properties;