"use client";
import Loading from "@/common/Loading";
import { useGetUsers } from "@/hooks/useAuth";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const { data, isLoading } = useGetUsers();
  const { users } = data || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <h1 className="font-extrabold py-3 text-primary-800">Users list</h1>
      <UsersTable users={users} />
    </>
  );
};

export default UsersPage;
