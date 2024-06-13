import { Button, Skeleton } from "@mui/material";
import { CardContainer, SearchSectionWrapper, StyledTextField } from "./styles";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { useUsers } from "@/api/users/use-users";
import { User } from "@/types/user";
import UserAccordion from "./user-accordion";
import UserLoaderSkeleton from "./user-loader-skeleton";

const Card = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const { users, isUsersFetching } = useUsers(searchValue);
  const [expandedAccordionIndex, setExpandedAccordionIndex] =
    useState<number>(-1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    setSearchValue(value || "");
  };

  return (
    <CardContainer>
      <form onSubmit={handleSubmit}>
        <SearchSectionWrapper>
          <StyledTextField
            label={t("Enter username")}
            variant="outlined"
            inputRef={inputRef}
          />
          <Button variant="contained" type="submit">
            {t("Search")}
          </Button>
        </SearchSectionWrapper>
      </form>
      {isUsersFetching ? (
        <UserLoaderSkeleton />
      ) : (
        users.map((user: User, index) => (
          <UserAccordion
            key={user.id}
            user={user}
            orderNumber={index}
            expandedAccordionIndex={expandedAccordionIndex}
            setExpandedAccordionIndex={setExpandedAccordionIndex}
          />
        ))
      )}
    </CardContainer>
  );
};

export default Card;
