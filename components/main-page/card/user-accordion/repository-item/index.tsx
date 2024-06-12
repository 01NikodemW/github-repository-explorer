import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Repository } from "@/types/repository";
import StarIcon from "@mui/icons-material/Star";

const RepositoryItem: FC<{
  repository: Repository;
}> = ({ repository }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#e0e0e0",
        padding: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {repository.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Typography>{repository.stargazers_count}</Typography>
          <StarIcon />
        </Box>
      </Box>
      <Typography>{repository.description}</Typography>
    </Box>
  );
};

export default RepositoryItem;
