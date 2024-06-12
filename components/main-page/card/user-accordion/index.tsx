import { useTranslation } from "react-i18next";
import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { User } from "@/types/user";
import { useUserRepositories } from "@/api/repositories/use-repositories";
import RepositoryItem from "./repository-item";
import { rem } from "@/utils/px-to-rem";

const UserAccordion: FC<{
  user: User;
}> = ({ user }) => {
  const { t } = useTranslation();

  const { userRepositories, isUserRepositoriesFetching } = useUserRepositories(
    user.login
  );

  return (
    <Accordion
      sx={{
        marginBottom: "16px",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          backgroundColor: "#f2f2f2",
          fontSize: rem(20),
          fontWeight: "bold",
        }}
      >
        {user.login}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
          paddingLeft: "16px",
          marginTop: "16px",
        }}
      >
        {userRepositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default UserAccordion;
