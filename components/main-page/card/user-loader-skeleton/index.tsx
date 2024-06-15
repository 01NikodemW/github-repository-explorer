import { USER_ITEMS_PER_PAGE } from "@/types/constants";
import { StyledSkeleton } from "./styles";

const UserLoaderSkeleton = () => {
  return (
    <>
      {Array.from({ length: USER_ITEMS_PER_PAGE }).map((_, index) => (
        <StyledSkeleton key={index} variant="rounded" />
      ))}
    </>
  );
};

export default UserLoaderSkeleton;
