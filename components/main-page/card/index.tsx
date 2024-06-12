import { Button } from "@mui/material";
import { CardContainer, SearchSectionWrapper, StyledTextField } from "./styles";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { useUsers } from "@/api/users/use-users";
import { User } from "@/types/user";
import UserAccordion from "./user-accordion";

const Card = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");

  const { users, isUsersFetching } = useUsers(searchValue);

  return (
    <CardContainer>
      <SearchSectionWrapper>
        <StyledTextField
          label={t("Enter username")}
          variant="outlined"
          inputRef={inputRef}
        />
        <Button
          variant="contained"
          onClick={() => {
            const value = inputRef.current?.value;
            setSearchValue(value || "");
          }}
        >
          {t("Search")}
        </Button>
      </SearchSectionWrapper>
      {users.map((user: User) => (
        <UserAccordion user={user} key={user.id} />
      ))}
    </CardContainer>
  );
};

export default Card;
