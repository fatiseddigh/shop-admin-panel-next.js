"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLoacalDate";

const Profile = () => {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  if (isLoading) return <Loading />;
  return (
    <>
      <h1>welcome {user.name}</h1>
      <p>
        <span>join Date : </span>
        <span>{toLocalDateString(user.createdAt)}</span>
      </p>
    </>
  );
};

export default Profile;
