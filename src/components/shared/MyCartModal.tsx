"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineAttachMoney, MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";

const MyCartModal = () => {
  const { data: user } = useSession();
  const { myCart } = useSelector((state: any) => state.myCart);
  const router = useRouter();
  const openModal = () => {
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  const view = (id: any) => {
    router.push(`/productsDetails?id=${id}`);
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <button className="mt-2" onClick={openModal}>
        <MdOutlineShoppingBag className="text-3xl font-semibold cursor-pointer" />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-full max-w-[1000px]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="">
            <h3 className="text-xl font-semibold text-primary-text">
              My Carts
            </h3>

            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border border-gray-200 bg-white shadow-lg overflow-x-auto">
                {/* Table Header */}
                <thead>
                  <tr className=" text-center border-b-2 text-base text-[#040404]">
                    <th className=" py-2 border font-normal whitespace-nowrap">
                      image
                    </th>
                    <th className=" py-2 border font-normal whitespace-nowrap">
                      Products Name
                    </th>
                    <th className=" py-2 border font-normal whitespace-nowrap">
                      Quantity
                    </th>
                    <th className=" py-2 border font-normal whitespace-nowrap">
                      Price
                    </th>
                    <th className=" py-2 border font-normal whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows */}
                  {myCart?.myCartsData?.map((i: any, idx: any) => (
                    <tr
                      key={idx}
                      className="h-[40px] md:h-[50px] border-b-2 font-normal"
                    >
                      <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                        <Image
                          src={i?.images[0]}
                          alt="table image"
                          height={500}
                          width={500}
                          className="w-12 mx-auto"
                        />
                      </th>
                      <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                        {i?.name}
                      </th>
                      <th className="px-4 py-3 border text-center font-normal whitespace-nowrap">
                        {i?.quantity}
                      </th>
                      <th className="px-4 py-3 border text-center font-normal whitespace-nowrap ">
                        {parseInt(i?.finalPrice)}
                      </th>
                      <th className="px-4 py-3 border text-center font-normal whitespace-nowrap cursor-pointer">
                        <h2
                          onClick={() => view(i?.productsId)}
                          className="cursor-pointer"
                        >
                          view
                        </h2>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyCartModal;
