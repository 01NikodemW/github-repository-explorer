import { Button, Skeleton, Typography } from "@mui/material";
import {
  CardContainer,
  SearchSectionWrapper,
  StyledButton,
  StyledTextField,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { useUsers } from "@/api/users/use-users";
import { User } from "@/types/user";
import UserAccordion from "./user-accordion";
import UserLoaderSkeleton from "./user-loader-skeleton";
import NoUserFound from "./no-user-found";

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
    setExpandedAccordionIndex(-1);
  };

  return (
    <CardContainer>
      <form onSubmit={handleSubmit}>
        <SearchSectionWrapper>
          <StyledTextField
            label={t("Enter username")}
            variant="outlined"
            inputRef={inputRef}
            data-cy="search-input"
          />
          <StyledButton
            variant="contained"
            type="submit"
            data-cy="search-button"
          >
            {t("Search")}
          </StyledButton>
        </SearchSectionWrapper>
      </form>
      {searchValue && (
        <Typography sx={{ marginBottom: "12px", color: "#262626" }}>
          {t("Showing users for") + ` "${searchValue}"`}
        </Typography>
      )}
      {isUsersFetching ? (
        <UserLoaderSkeleton />
      ) : !isUsersFetching && users.length > 0 ? (
        users.map((user: User, index) => (
          <UserAccordion
            key={user.id}
            user={user}
            orderNumber={index}
            expandedAccordionIndex={expandedAccordionIndex}
            setExpandedAccordionIndex={setExpandedAccordionIndex}
          />
        ))
      ) : searchValue ? (
        <NoUserFound searchValue={searchValue} />
      ) : null}
    </CardContainer>
  );
};

export default Card;
