"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";

const DashboardForm = () => {
  const { data: user, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center">
        <span className="loading loading-ring  h-[300px] w-[10%] mx-auto"></span>
      </div>
    );
  }
  if (status === "unauthenticated") {
    router.push("/");
    return;
  }
  if (user?.user?.role === "user") {
    router.push("/");
    return;
  }

  return (
    <div>
      {user?.user?.role === "admin" && <Admin />}{" "}
      {user?.user?.role === "superAdmin" && <SuperAdmin />}
    </div>
  );
};

export default DashboardForm;
