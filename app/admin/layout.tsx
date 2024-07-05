import AdminSideBar from "../components/admin/AdminSideBar"



export default function AdminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            
           <AdminSideBar />
            <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                <div className="">
                    {children}
                </div>
            </div>
        </div>
      </div>
    )
  }