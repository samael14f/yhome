import PropertyList from "@/app/components/properties/PropertyList";

import { getUserId } from "@/app/lib/actions";

const Properties = async() =>{
    const userId = await getUserId()
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyList 
                landlord_id={userId}
            />
        </div>
    )
};

export default Properties;