import Image from 'next/image';
import Link from 'next/link';

import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import { getUserId } from '@/app/lib/actions';
import AddPropertyButton from './AddPropertyButton';
import apiService from "@/app/services/apiService";

const Navbar = async () => {
    const userId = await getUserId();
    let isSuperUser = null;
    let isStaff = null;
    if (userId != null){
    const user = await apiService.get(`/api/auth/${userId}/`);
    isSuperUser = user.is_superuser;
    isStaff = user.is_staff;
    }
    console.log('userId:', userId);

    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo.jpg"
                            alt="Yhome logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton 
                            userId={userId}
                        />

                        <UserNav 
                            userId={userId}
                            isSuperUser={isSuperUser}
                            isStaff={isStaff}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;