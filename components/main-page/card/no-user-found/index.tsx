import { Typography } from "@mui/material";
import { RepositoryContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { FC } from "react";

type NoUserFoundProps = {
  searchValue: string;
};

const NoUserFound: FC<NoUserFoundProps> = ({ searchValue }) => {
  const { t } = useTranslation();
  return (
    <RepositoryContainer>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        {t("No users found for") + searchValue}
      </Typography>
    </RepositoryContainer>
  );
};

export default NoUserFound;
