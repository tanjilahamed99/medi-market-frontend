import AdminLavList from "@/pages/dashboard/AdminLavList";

export default function VendorLayout({ children }: any) {
  return (
    <div className="container mx-auto bg-[#f5f5f5] flex">
      <div className="w-[20%]">
        <AdminLavList />
      </div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
}
