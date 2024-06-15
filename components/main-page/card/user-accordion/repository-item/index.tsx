import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Repository } from "@/types/repository";
import StarIcon from "@mui/icons-material/Star";
import { RepositoryContainer } from "./styles";

type RepositoryItemProps = {
  repository: Repository;
};

const RepositoryItem: FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <RepositoryContainer>
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
    </RepositoryContainer>
  );
};

export default RepositoryItem;
