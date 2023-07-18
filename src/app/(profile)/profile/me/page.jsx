"use client";

import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Profile = () => {
  const [formData, setFormData] = useState({});
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const includesKey = ["name", "email", "phoneNumber", "biography"];
  useEffect(() => {
    if (user) setFormData(includeObj(user, includesKey));
  }, [user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-bold mb-4">User Info</h1>
      <form onSubmit={submitHandler} className="space-y-5">
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
        <button
          disabled={isUpdating}
          type="submit"
          className="btn btn--primary w-full"
        >
          {isUpdating ? "LOADING ..." : "send"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
