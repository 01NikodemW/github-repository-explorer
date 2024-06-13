import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/query-keys";
import { axiosInstance } from "@/api/axios-instance";
import { User } from "@/types/user";
import { USER_ITEMS_PER_PAGE } from "@/types/constants";

export async function getUsers(searchValue: string): Promise<User[]> {
  let url = `/${queryKeys.search}/${queryKeys.users}`;

  if (searchValue) {
    url += `?q=${searchValue}&per_page=${USER_ITEMS_PER_PAGE}`;
  }

  const response = await axiosInstance.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data.items;
}

export function useUsers(searchValue: string) {
  const { data: users = [], isFetching: isUsersFetching } = useQuery<User[]>({
    queryKey: [queryKeys.users, searchValue],
    queryFn: () => getUsers(searchValue),
    enabled: !!searchValue,
  });

  return {
    users,
    isUsersFetching,
  };
}
