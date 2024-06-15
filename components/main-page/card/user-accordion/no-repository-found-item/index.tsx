import { Typography } from "@mui/material";
import { RepositoryContainer } from "./styles";
import { useTranslation } from "react-i18next";

const NoRepositoryFoundItem = () => {
  const { t } = useTranslation();
  return (
    <RepositoryContainer>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        {t("No repositories")}
      </Typography>
    </RepositoryContainer>
  );
};

export default NoRepositoryFoundItem;
