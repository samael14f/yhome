import SideBar from "../components/profile/SideBar"



export default function MyProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            
            <SideBar/>
            <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {children}
                </div>
            </div>
        </div>
    </div>
    )
  }