"use client";

import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { includeObj } from "@/utils/objectUtils";
import { useEffect, useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({});
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  const includesKey = ["name", "email", "phoneNumber", "biography"];
  useEffect(() => {
    if (user) setFormData(includeObj(user, includesKey));
  }, [user]);

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-sm">
      <h1>User Info</h1>
      <form action="">
        {Object.keys(includeObj(user, includesKey)).map((key) => {
          return (
            <TextField
              key={key}
              label={key}
              name={key}
              value={formData[key] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          );
        })}
      </form>
    </div>
  );
};

export default Profile;
