import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/query-keys";
import { axiosInstance } from "@/api/axios-instance";
import { useEffect, useState } from "react";
import { Repository } from "@/types/repository";

export async function getUserRepositories(
  username: string
): Promise<Repository[]> {
  let url = `/${queryKeys.users}/${username}/${queryKeys.repos}`;

  const response = await axiosInstance.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

export function useUserRepositories(username: string) {
  const {
    data: userRepositories = [],
    isFetching: isUserRepositoriesFetching,
  } = useQuery<Repository[]>({
    queryKey: [queryKeys.users, username, queryKeys.repos],
    queryFn: () => getUserRepositories(username),
  });

  return {
    userRepositories,
    isUserRepositoriesFetching,
  };
}
