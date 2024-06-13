import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { User } from "@/types/user";
import { useUserRepositories } from "@/api/repositories/use-repositories";
import RepositoryItem from "./repository-item";
import {
  RepositoryLoaderSkeleton,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from "./styles";

type UserAccordionProps = {
  user: User;
  orderNumber: number;
  expandedAccordionIndex: number;
  setExpandedAccordionIndex: (index: number) => void;
};

const UserAccordion: FC<UserAccordionProps> = ({
  user,
  orderNumber,
  expandedAccordionIndex,
  setExpandedAccordionIndex,
}) => {
  const { userRepositories, isUserRepositoriesFetching } = useUserRepositories(
    user.login
  );

  const onAccordionClickHandler = (): void => {
    setExpandedAccordionIndex(
      orderNumber === expandedAccordionIndex ? -1 : orderNumber
    );
  };

  return (
    <StyledAccordion expanded={orderNumber === expandedAccordionIndex}>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="user-repository"
        id="user-repository"
        onChange={onAccordionClickHandler}
      >
        {user.login}
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        {isUserRepositoriesFetching ? (
          <RepositoryLoaderSkeleton variant="rounded" />
        ) : (
          userRepositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo} />
          ))
        )}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default UserAccordion;
